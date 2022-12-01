import { useEffect , useState } from "react";
import Footer from './Footer';
import Book from './Book';

export default function Main(){

    if(!localStorage.getItem('token')) window.location.href="/";

    const [data, setData] = useState([]);

    useEffect(()=>{
        async function getData(){
            fetch('https://apitester.pythonanywhere.com/api/books/' ,{
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' : `Token ${localStorage.getItem('token')}`,
                }
            })
            .then(res=>{
                if(res.status===401){
                    window.location.href="/";
                    return;
                }else{
                   return res.json();
                }
            })
            .then(json=>setData(json))
            .catch(err=>console.log(err))

        };
        getData();
    } ,[])

    if(data.length){

    return(
        <div className="wrapper bg-secondary">
            <div className="header">

            <nav className=" navbar navbar-dark bg-dark main-navbar">
                <p style={{color: '#fff'}} className="h1">{localStorage.getItem('name')}</p>            
                <div>
                    <button type="button" className="btn btn-warning main-btn" onClick={()=>window.location.href="/add"}>Add</button>
                    <button type="button" className="btn btn-danger main-btn" onClick={() =>{
                        localStorage.clear();
                        window.location.href="/";
                    }} >Log out</button>
                </div>
            </nav>

            </div>
            <div className="main container">
                {data.map((element, i) => <Book key={i} value={element}/>)}
            </div>
            <Footer />
        </div>
    );
    }else{
        return(
    <div className="wrapper bg-secondary">
            <div className="header">

            <nav className=" navbar navbar-dark bg-dark main-navbar">
                <p style={{color: '#fff'}} className="h1">{localStorage.getItem('name')}</p>            
                <div>
                    <button type="button" className="btn btn-warning main-btn" onClick={()=>window.location.href="/add"}>Add</button>
                    <button type="button" className="btn btn-danger main-btn" onClick={() =>{
                        localStorage.clear();
                        window.location.href="/";
                    }} >Log out</button>
                </div>
            </nav>

            </div>
            <div className="main container">
                <div style={{color: '#fff' , fontWeight: 'bold' , textAlign: 'center'}} className="h3">You haven't got books</div>
            </div>
            <Footer />
        </div>
        );
}
}