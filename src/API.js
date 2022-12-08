import axios from 'axios'



const searchimage=async  (term)=>{
   const responsedata= await  axios.get('https://api.unsplash.com/search/photos',{
    headers: {
        Authorization: 'Client-ID e9edc8904684a1f7df7a980ed3e842bf2281488ab4b745bd848783ae9dec93e3'
      },
   params:{
    query:term
   }
})

console.log('responsedata',responsedata)
   return responsedata
  
    }
 

export default searchimage