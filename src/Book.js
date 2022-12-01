import { BsFillPencilFill, BsTrash } from "react-icons/bs";
import {useContext} from 'react';
import Context from './Context';
import {Link} from 'react-router-dom';

export default function Book(props){

    const obj = useContext(Context);

    return(
        <div className="book container bg-dark">
           <div>
                <div className="h2">
                    {props.value.name}
                </div>
                <p>Author:  {props.value.author}</p>
                <p>Pages:  {props.value.page}</p>
                <p>Price: {props.value.price}</p>
          
            </div>
            <div>
                <Link style={{color: '#fff'}} to='/edit'><BsFillPencilFill className="icon" onClick={()=>obj.onEdit(props.value)}/></Link>
                <BsTrash className="icon" onClick={async ()=>{
                    const confirm = window.confirm('Remove book?');
                    if(confirm){
                    fetch(`https://apitester.pythonanywhere.com/api/books/${props.value.id}/` , {
                        method: 'DELETE',
                        headers: {
                            'Content-Type' : 'application/json',
                            'Authorization' : `Token ${localStorage.getItem('token')}`
                        }
                    })
                    .then(res=>console.log(res))
                    .then(json=>window.location.href="/main")
                    .catch(err=>console.log(err))
                    }
                }}/>
            </div>
        </div>
    );
}