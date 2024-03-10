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
        block: "academic block 1",
        floors: [
            {
                name: "Ground Floor",
                rooms: [
                    "seminar hall 1",
                    "LTA 01",
                    "civil lab 01",
                    "LTA 02",
                    "male washroom"
                ]
            },
            {
                name: "1st Floor",
                rooms: [
                    "female washroom",
                    "lab 04",
                    "electronic lab 03",
                    "LTA 03",
                    "LTA 04"
                ]
            },
            {
                name: "2nd Floor",
                rooms: [
                    "lab 5",
                    "LTA 05",
                    "civil lab 02",
                    "male washroom",
                    "LTA 06"
                ]
            },
            {
                name: "3rd Floor",
                rooms: [
                    "research cell",
                    "LTA 08",
                    "LTA 07",
                    "CLA 07b",
                    "CLA 08 b",
                    "CLA 08a"
                ]
            },
            {
                name: "4th Floor",
                rooms: [
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
    },
    {
        block: "Admin block",
        floors: [
            {
                name: "Basement",
                rooms: ["library", "male washroom", "female washroom"]

            },
            {
                name: "Ground floor",
                rooms: ["CR 02", "CR 01", "Lab 2", "Lab 1", "male washroom", "female washroom", "Conference room", "Fee cell", "Director office"]

            },
            {
                name: "1st floor",
                rooms: ["Physics Lab", "Electronic Lab", "Staff room", "CR 03 (probhition area)", "CR 04", "CR 05", "male washroom", "female washroom", "server room", "Fee cell", "Director office"]

            },
            {
                name: "2nd floor",
                rooms: ["Examination Cell"]

            },

        ]
    },
    {
        block: "Mess",
        floors: [
            {
                name: "Ground Floor",
                rooms: ["Mess"]
            },
            {
                name: "1st Floor",
                rooms: ["Pizza slices", "Medical room"]
            },
            {
                name: "2nd Floor",
                rooms: ["Deparmental Store (DS)", "Gym", "Saloon", "Washroom"]
            }
        ]
    },
    {
        block: "academic block 2 / department of nursing",
        floors: [
            {
                name: "Basement",
                rooms: ["Pre clinical science lab",
                    "Principal Office",
                    "Vice Principal Office",
                    "Nutrition lab",
                    "Community health nursing lab",
                    "Girls common room",
                ]
            },
            {
                name: "1st Floor",
                rooms: ["OBG and pediatrics lab",
                    "Medical room", "LT B 02",
                    "Advance nursing skill lab",
                    "LT B 01"
                ]
            },
            {
                name: "2nd Floor",
                rooms: ["CL 06 / CL B 04 A",
                    "Pediatrics lab 06", "LT B 04",
                    "CL B 03", "LT B 03", "Washroom"
                ]
            },
            {
                name: "3rd Floor",
                rooms: ["CL 07 / CL B 06 A",
                    "CL B 05", "LT B 05", "female washroom"
                ]
            },
            {
                name: "4th Floor",
                rooms: ["LT B 07",
                    "CR-CL B 05",
                    "CL 08 A",
                    "LT B 08",
                    "CL B 07 A",
                    "CL B 07 B",
                    "female washroom"
                ]
            }
        ]
    },

]