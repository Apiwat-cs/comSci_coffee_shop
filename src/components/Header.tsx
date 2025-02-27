import { Link } from "react-router"


function Header() {
  return (
    <nav className="bg-black text-white p-6 ">
        <div className="flex flex-row justify-center space-x-2 my-4 text-[48px] font-bold">
            <img src="/images/logo.png" alt="Logo" className="h-18 w-18 rounded-xl"/>
            <h1>Comsci Coffee Shop</h1>
        </div>
        
        <ul className="flex flex-row justify-center space-x-6">
            <li><Link to= "/" className="hover:text-yellow-500 text-xl px-4">Home</Link></li>
            <li><Link to= "/About" className="hover:text-yellow-500 text-xl px-4">About Us</Link></li>
        </ul>
    </nav>
  )
}

export default Header