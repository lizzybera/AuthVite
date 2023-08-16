import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Link, useNavigate } from "react-router-dom"
import { signUser } from "../../Api/AuthApi"

const SignIn = () => {
  const navigate = useNavigate()

  const model = yup.object({
    email : yup.string().required(),
    password : yup.string().required(),
  })

  const { 
    handleSubmit, register, formState : {errors} 
  } = useForm({
    resolver : yupResolver(model)
  })

  const onhandleSubmit = handleSubmit(async (data)=>{
    const {email, password} = data

    signUser({email, password}).then((res)=>{
      navigate("/")
      console.log(res);
      
    })

  })

  return (
    // container
    <div className="flex justify-center align-middle w-full h-[100vh]">
      {/* main */}
      <div className="flex flex-col align-center justify-center">
        {/* form */}
        <form className="w-[400px] px-6  py-4 border flex flex-col justify-center align-middle" onSubmit={onhandleSubmit}>
          
          {/* title */}
          <div className="text-[20px] flex justify-center align-middle text-green-600 font-[700]">Log-In</div>
          {/* inPuts */}

{/* email */}
          <div>
            <div className="text-green-500 pt-6">email</div>
            <input className="border w-[100%] border-green-600 rounded-[20px] h-[40px] px-3" placeholder="please enter your email" {...register("email")}/>
            {errors.email?.message && <div className="text-rose-600 text-[12px] text-right">error</div>}
          </div>
{/* password */}
          <div>
            <div className="text-green-500 pt-6">password</div>
            <input className="border w-[100%] border-green-600 rounded-[20px] h-[40px] px-3" placeholder="please enter your password" {...register("password")} />
            {errors.password?.message && <div className="text-rose-600 text-[12px] text-right">error</div>}
          </div>

          {/* button */}
          <button className="w-[100%] h-[40px] bg-green-500 my-[20px] hover:cursor-pointer font-[500] text-slate-800 hover: duration-[300ms] transition-all hover:bg-orange-400" type="submit">Sign In</button>

          {/* navigate to sign-in */}
          <hr />
          <Link to="/register" >
          <div className="flex justify-center w-[100%] font-[500] mt-2 no-underline">don't have an Account? </div>
          <div className="text-green-600 flex justify-center w-[100%] font-[700] text-[20px] hover : cursor-pointer mt-2 transition-all hover : duration-[300ms]">sign-up</div>
          </Link >

        </form>
      </div>
    </div>
  )
}

export default SignIn