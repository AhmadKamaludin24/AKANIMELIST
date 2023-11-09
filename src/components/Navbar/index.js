"use Client"
import InputSearch from './InputSearch'
import Link from 'next/link'
const Navbar = () => {
  return (
    <header className='bg-color-accent'>
      <div className="flex md:flex-row flex-col justify-between p-4">
        <Link href='/' className="font-bold text-color-dark text-2xl ">AKANIMELIST❄</Link>
       <InputSearch/>
      </div>
  </header>
  ) 
}
export default Navbar