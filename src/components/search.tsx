import { MapPinIcon } from '@heroicons/react/24/outline'

export default function Search({ onChange }: { onChange: (...args: any) => void }) {
    return (
        <div className='flex items-center align-middle gap-2 px-2 py-2 shadow-md w-full border-b-2 hover:border-b-red-500 rounded-md'>
            <MapPinIcon className='h-4 w-4' />
            <input
                className='first-line w-full outline h-full outline-none'
                type='search'
                placeholder='search rooms here (eg. washroom, lta 08, faculty name)'
                onChange={onChange}
            />
        </div>
    )
}
