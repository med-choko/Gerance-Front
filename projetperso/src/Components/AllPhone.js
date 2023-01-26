import React , {useReducer,useEffect} from 'react'
import axios from 'axios'
import { Card } from 'semantic-ui-react'



function AllPhone() {

    const initialState = {
loading: true,
error:'',
telephones:{}

    };
    const reducer=(state,action) =>{
        switch(action.type){
            case 'FETCH_SUCCESS':
                return {
                    loading:false,
                    error:'',
                    telephones:action.payload
                }
                case 'FETCH_ERROR':
                    return {
                        loading:false,
                        error:action.payload,
                        telephones: {}
                    }
                    default: return state;
        }
    };

    const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('http://localhost:5000/allphones/')
        .then((response) =>{
            dispatch({
                type: 'FETCH_SUCCESS',
                payload: response.data,
            })
        }).catch((error) =>
        dispatch({
            type : 'FETCH_ERROR',
            payload :error
        })
        )
    })

  return (
    <div>
        {
state.loading ? 'Loading......'   : state.telephones.data.map((telephone,index) =>{

return (
<div key={index}>


<Card
    href={['/telephone/'+telephone.reference]}
    header={telephone.marque}
    meta={telephone.modele}
    description={telephone.description}
    reference={telephone.reference}
  />

</div>

)



}
)

}

    </div>
  )
}

export default AllPhone