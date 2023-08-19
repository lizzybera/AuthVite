import pix from "../../assets/dummy Image.png"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { donateBook } from "../../Api/BookApi"

const DonateBooks = () => {
  const navigate = useNavigate()

  const [image, setImage] = useState<string>("")
  const [avatar, setAvatar] = useState<string>(pix)

  const onChangePics = (e : any) =>{
    const imageChange = e.target.files[0]
    const avatarChange = URL.createObjectURL(imageChange)

    setImage(imageChange)
    setAvatar(avatarChange)
  }

  const model = yup.object({
    title : yup.string().required(),
    desc : yup.string().required(),
  })

  const { 
    handleSubmit, register, formState : {errors} } = useForm({
    resolver : yupResolver(model)
  })

  const onhandleSubmit = handleSubmit((data : any)=>{
    const {title, desc} = data

    const formData = new FormData()

    formData.append("title", title)
    formData.append("desc", desc)
    formData.append("avatar", image)

    donateBook(formData).then(()=>{
      navigate("/")
    })

  })

  return (
    // container
    <div className="flex justify-center align-middle w-full h-[600px]">
      {/* main */}
      <div className="flex flex-col align-center justify-center">
        {/* form */}
        <form className="w-[400px] px-6  py-1 border flex flex-col justify-center align-middle" onSubmit={onhandleSubmit}>
          
          {/* title */}
          <div className="text-[20px] flex justify-center align-middle text-purple-600 font-[700]">Donate Books</div>

          {/* image */}
          <div className="w-full flex flex-col justify-center items-center">
{/* circle */}
          <div className="border w-[100px] h-[100px] rounded-[50px] mt-2">
              <img className="object-cover  w-[100px] h-[100px] rounded-[50px]" src={avatar}/>
          </div>
{/* img input/label */}
          <input onChange={onChangePics} className="hidden" id="id" type="file" 
          accept="image/png, image/jpg, image/jpeg"/>
          <label className="w-[100px] h-8 bg-purple-500 my-[10px] hover:cursor-pointer font-[500] text-slate-800 flex justify-center items-center " htmlFor="id">Choose pics </label>
          </div>

          {/* inPuts */}
{/* title */}
          <div>
            <div className="text-purple-500 pt-3">title</div>
            <input className="border border-purple-600 w-[100%] h-[40px] px-3" placeholder="please enter your title"  {...register("title")}/>
            {errors.title?.message && <div className="text-rose-600 text-[12px] text-right">error</div>}
          </div>

{/* desc */}
          <div>
            <div className="text-purple-500 pt-3">desc</div>
            <textarea className="border w-[100%] border-purple-600 h-[60px] px-3" placeholder="please enter a brief desc" {...register("desc")} />
            {errors.desc?.message && <div className="text-rose-600 text-[12px] text-right">error</div>}
          </div>

          {/* button */}
          <button className="w-[100%] h-[40px] bg-purple-500 my-[20px] hover:cursor-pointer font-[500] text-slate-800 hover: duration-[300ms] transition-all hover:bg-orange-400" type="submit">Donate</button>

        </form>
      </div>
    </div>
  )
}

export default DonateBooks