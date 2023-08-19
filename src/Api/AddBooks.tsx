import axios from "axios"

const URL : string = "http://localhost:2659/api/v1"

export const addBook = async(data : any)=>{
        try {
            const config  = {
                "Content-type" : "multipart/formdata"
            }
            
            return await axios.post(`${URL}/add`, data, config).then((res : any)=>{
                return res.data.data
            })
        } catch (error) {
            console.log(error);
            
        }
}

export const viewAddBooks = async()=>{
        try {
            
            return await axios.get(`${URL}/viewAdd`).then((res : any)=>{
                return res.data.data
            })
        } catch (error) {
            console.log(error);
            
        }
}