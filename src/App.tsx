import { ChangeEvent, useEffect, useState } from 'react'
import { SearchedRoom, searchRoom } from './utils/helper.utils'
import Navbar from './components/navbar';
import Footer from './components/footer';
import PlaceholderImage from './assets/images/undraw_searching_re_3ra9.svg';
import Search from './components/search';
import Card from './components/card';

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
    <div className="p-2 w-full flex flex-col h-screen items-center gap-4 overflow-y-auto" >
      <Navbar />
      <Search onChange={handleSearch} />

      <div className='flex flex-col gap-2 '>
        {
          search ?
            result && result.map(({ block, floor, rooms }, index) => {
              return (
                <Card block={block} floor={floor} rooms={rooms} key={index} />
              )
            })
            :
            <div className='flex  justify-center  my-8 mx-4'>
              <img src={PlaceholderImage} alt="Your SVG" />
            </div>
        }
      </div>

      <Footer />

    </div >
  )
}
