import React from 'react'
import { useParams } from 'react-router-dom';





function Profil() {
const params = useParams();


  return (
    <div>

<h1>hello ,{params.name}</h1>


    </div>
  )
}

export default Profil