import { Link } from "react-router-dom"
import pix from "../../assets/girl_book_sketch-removebg-preview.png"
import { useDispatch, useSelector } from "react-redux"
import { logOut } from "../../Global/GlobalState"

const Header = () => {
  const users = useSelector((state : any)=> state.user)
  const dispatch = useDispatch()
  return (
    <div className="bg-purple-400 text-white h-20 flex justify-center items-center w-full">
        {/* main */}
        <div className="w-[90%] flex justify-between">
{/* logo */}
          <Link to="/">
          <div className="flex justify-center items-end font-[600] text-[20px] hover:cursor-pointer">
          <img src={pix} alt="logo" className="w-[60px] h-[60px] text-white" />
          <div className="text-slate-600">DreamBook </div>
          </div>
          </ Link >
          {/* navs */}
          <div className="flex w-[350px] justify-between items-center">
          <Link to="/">
            <div className="font-[600] text-[18px] text-slate-600 hover:cursor-pointer">Books</div>
          </Link>

            <Link to="/donate">
            <div className="font-[600] text-slate-600 text-[18px] hover:cursor-pointer">Donate Books</div>
            </Link>

            <Link to="/add">
            <div className="font-[600] text-slate-600 text-[18px] hover:cursor-pointer">added Books</div>
            </Link>
         </div>
         {/* button */}
         <button className="font-[600] text-slate-600 text-[18px] hover:cursor-pointer"
         onClick={()=>{
          dispatch(logOut())
         }}
         >LogOut</button>
           
        </div>
    </div>
  )
}

export default Header