import { useQuery } from "@tanstack/react-query"
import { addBook, viewAddBooks } from "../../Api/AddBooks"

const BooksAdded = () => {

  const {data : add} = useQuery({
    queryKey : ["add"],
    queryFn : viewAddBooks,
    refetchInterval : 1000
  })

  return (
    // container
    <div className="w-full flex justify-center min-h-[100vh] p-3">
      {/* main */}
      <div className="w-[90%] h-[500px] flex flex-wrap">

        {/* card */}
        
        {
          add?.map((props : any)=>(
                <div key={props._id}>
                  <div className="w-[260px] border-[2px] h-[250px] rounded-md border-slate-300 flex flex-col justify-between mr-[20px] mt-4">
{/* image */}
         <img className="w-full h-[60%] bg-purple-600 object-cover rounded-tl-md rounded-tr-md" src={props.avatar} />
{/* title */}
          <div className="w-full px-3 text-purple-950 font-bold">
           {/* {title}  */}
           {/* Lorem, ipsum dolor. */}
           {props.title}
          </div>
{/* desc */}
          <div className="w-full px-3 text-purple-900">
           {/* {desc}  */}
           {/* Lorem ipsum dolor sit amet consectetur. */}
           {props.desc}
          </div>
{/* button */}
          <button className="w-full h-[30px] bg-purple-600 mt-2 rounded-b-md cursor-pointer"
          onClick={()=>{
              addBook(props)
          }}
          >Add Book</button>

        </div>
                </div>
          ))
        } 

      </div>
    </div>
  )
}

export default BooksAdded