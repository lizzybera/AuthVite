import axios from "axios"

const URL : string = "http://localhost:2659/api/v1"

export const donateBook = async(data : any)=>{
        try {
            const config  = {
                "Content-type" : "multipart/formdata"
            }
            
            return await axios.post(`${URL}/donate`, data, config).then((res : any)=>{
                return res.data.data
            })
        } catch (error) {
            console.log(error);
            
        }
}

export const viewBooks = async()=>{
        try {
            
            return await axios.get(`${URL}/viewBook`).then((res : any)=>{
                return res.data.data
            })
        } catch (error) {
            console.log(error);
            
        }
}