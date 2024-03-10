import { roomsData } from "../data/guide";

export interface SearchedRoom {
    block: string
    floor: string
    rooms: Array<string>
}


export function searchRoom(search: string): SearchedRoom[] {
    const filteredRooms: SearchedRoom[] = [];

    const sanitizedSearch = search.replace(/[^\w\s]/g, '').replace(/\s+/g, '').toLowerCase();

    roomsData.forEach((building) => {
        const block = building.block; // Ensure block is defined
        building.floors.forEach((floor) => {
            const floorName = floor.name; // Ensure floorName is defined
            const matchingRooms = floor.rooms.filter((room) =>
                room.replace(/[^\w\s]/g, '').replace(/\s+/g, '').toLowerCase().includes(sanitizedSearch)
            );

            if (matchingRooms.length > 0) {
                filteredRooms.push({
                    block,
                    floor: floorName,
                    rooms: matchingRooms,
                });
            }
        });
    });

    return filteredRooms;
}

