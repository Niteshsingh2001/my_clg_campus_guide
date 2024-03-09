interface Floor {
    name: string
    rooms: Array<string>
}

interface RoomsData {
    block: string
    floors: Array<Floor>
}



export const roomsData: Array<RoomsData> = [
    {
        "block": "academic block 1",
        "floors": [
            {
                "name": "Ground Floor",
                "rooms": [
                    "seminar hall 1",
                    "LTA 01",
                    "civil lab 01",
                    "LTA 02",
                    "male washroom"
                ]
            },
            {
                "name": "1st Floor",
                "rooms": [
                    "female washroom",
                    "lab 04",
                    "electronic lab 03",
                    "LTA 03",
                    "LTA 04"
                ]
            },
            {
                "name": "2nd Floor",
                "rooms": [
                    "lab 5",
                    "LTA 05",
                    "civil lab 02",
                    "male washroom",
                    "LTA 06"
                ]
            },
            {
                "name": "3rd Floor",
                "rooms": [
                    "research cell",
                    "LTA 08",
                    "LTA 07",
                    "CLA 07b",
                    "CLA 08 b",
                    "CLA 08a"
                ]
            },
            {
                "name": "4th Floor",
                "rooms": [
                    "HOD office (SOC)",
                    "sandeep kumar budhani",
                    "staff room ",
                    "jitender chaudhary",
                    "naveen tiwari",
                    "M C Joshi",
                    "Praveen Joshi",
                    "Chaunal",
                    "Mohit Pant",
                    "Lalit",
                    "Rohit",
                    "Nidhi Joshi"
                ]
            }
        ]
    }
]