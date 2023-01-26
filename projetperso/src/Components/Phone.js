import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Phone() {
    const params = useParams()
    const [loading,setLoading] = useState(true)
    const[error,setError] = useState()
const [phone,setPhone] = useState({})

useEffect(()=>{
   axios.get('http://localhost:5000/onephone/'+ params.reference) 
   .then((response) =>{
setLoading(false)
setError('')
setPhone(response.data.data)
   }
).catch(response =>{
    setLoading(false)
    setPhone()
    setError(error)
})
})

  return (
    <div>phone reference :{params.reference} <br/>
    
    {
        loading ?'Loading' : phone.body 
    }
     
     
     {
loading ?'Loading' : phone.marque

    }
    
    
    </div>
  )
}

export default Phone