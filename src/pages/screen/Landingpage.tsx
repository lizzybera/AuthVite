import { Link } from "react-router-dom"
import pix from "../../assets/girl_book_sketch-removebg-preview.png"

const Landingpage = () => {


  return (
    // container
    <div className="flex justify-center items-center w-full h-[100vh]">
      {/* main */}
      <div className="flex flex-col justify-center items-center w-[500px]">
        {/* Title */}
        <div className="text-slate-600 font-[500] text-[30px]">DreamBook</div>
        {/* image */}
            <img src={pix} className="w-[150px] h-[100px ]"/>
            {/*  */}
            <div className="flex mt-[30px]">

            <Link to="/signin">
              <div className="w-[100px] h-[40px] flex justify-center items-center rounded-md mx-2 font-[600] bg-purple-500 hover:cursor-pointer text-slate-800 hover:bg-orange-400 hover: duration-[300ms] transition-all">Sign In</div>
            </Link>
            {/* </div> */}
            <Link to="/register">
              <div className="w-[100px] h-[40px] flex justify-center items-center rounded-md mx-2 font-[600] bg-purple-500 hover:cursor-pointer text-slate-800 hover:bg-orange-400 hover: duration-[300ms] transition-all">Sign Up</div>
            </Link>
            </div>

      </div>
    </div>
  )
}

export default Landingpage