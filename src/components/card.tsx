import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline"

interface CardProps {
    block: string
    floor: string
    rooms: Array<string>


}



// <div
// className='flex  bg-fuchsia-100 items-center h-96  p-2 rounded-md overflow-x-auto capitalize '
// >
// <div className="flex justify-between w-full ">
//     <span className="w-full">{block}</span>
//     <div><ChevronDoubleRightIcon className='h-5 w-5 text-black' /></div>
//     <span className="w-full">{floor}</span>
//     <div><ChevronDoubleRightIcon className='h-5 w-5 text-black' /></div>
// </div>

// <div className='flex  gap-2 items-center justify-center  w-full h-5 bg-blue-300'>
//     {
//         rooms.map(
//             (room, index) =>
//                 <div key={index} className='capitalize bg-green-500  text-red-600 w-full  '>
//                     {index !== rooms.length - 1 ? `${room},` : room}
//                 </div>
//         )
//     }
// </div>
// </div>

// capitalize p-2 rounded-sm flex gap-4 items-center w-full overflow-x-auto
export default function Card({ block, floor, rooms }: CardProps) {
    return (
        <div className="capitalize flex bg-gray-100 px-2 py-1 justify-between  rounded-md overflow-hidden items-center ">
            <div className="flex gap-2">
                {block}
                <ChevronDoubleRightIcon className='h-5 w-5 text-black' />
                {floor}
                <ChevronDoubleRightIcon className='h-5 w-5 text-black' />
            </div>
            <div>
                {
                    rooms.map(
                        (room, index) =>
                            <div key={index} className='capitalize  text-red-600 w-full  '>
                                {index !== rooms.length - 1 ? `${room},` : room}
                            </div>
                    )
                }
            </div>

        </div>
    )
}
