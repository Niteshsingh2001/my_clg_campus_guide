import { ChangeEvent, useEffect, useState } from 'react'
import { SearchedRoom, searchRoom } from './utils/helper.utils'
import Navbar from './components/navbar';
import Footer from './components/footer';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import Placeholder from './assets/images/undraw_searching_re_3ra9.svg';
import Search from './components/search';

export default function App() {
  const [search, setSearch] = useState<string>("")
  const [result, setResult] = useState<Array<SearchedRoom>>([])

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  useEffect(() => {
    const data = searchRoom(search)
    setResult(data)

  }, [search])

  return (
    <div className="p-2 w-full h-screen flex flex-col items-center gap-4" >
      <Navbar />
      <Search onChange={handleSearch} />


      <div className='w-full flex flex-col justify-center gap-2'>
        {
          search ?
            <>
              {
                result && result.map(({ block, floor, rooms }, index) => {
                  return (
                    <div
                      className='capitalize p-2 rounded-sm flex gap-4 w-full overflow-x-auto'
                      key={index}
                    >
                      {block} <ChevronDoubleRightIcon className='h-5 w-5' /> {floor} <ChevronDoubleRightIcon className='h-5 w-5' />
                      <div className='flex gap-2'>
                        {
                          rooms.map(
                            (room, index) =>
                              <div key={index} className='capitalize text-red-600 w-fit  '>
                                {index !== rooms.length - 1 ? `${room},` : room}
                              </div>
                          )
                        }
                      </div>
                    </div>
                  )

                })
              }
            </>
            :
            <div className='flex  justify-center  my-8 mx-4'>
              <img src={Placeholder} alt="Your SVG" />
            </div>
        }
      </div>

      <Footer />

    </div >
  )
}
