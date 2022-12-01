import Footer from './Footer';
import { useFormik} from 'formik';
import {useEffect} from 'react';

export default function Add(){

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            window.location.href='/';
        }
        async function getData(){
            fetch('https://apitester.pythonanywhere.com/api/books/' , {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' : `Token ${localStorage.getItem('token')}`
                }
            })
            .then(res=>{
                if(res.status===401){
                    window.location.href="/";
                }
            })
        }
        getData();
    } ,[])

    function validate(values){
        const errors = {};

        if(!values.name){
            errors.name="required";
        }else if(values.name.length<3){
            errors.name="should be more than 2 symbols";
        }

        if(!values.author){
            errors.author="required";
        }else if(values.author.length<3){
            errors.author="should be more than 2 symbols";
        }

        if(!values.page){
            errors.page="required";
        }else if(!isFinite(values.page)){
            errors.page="should be only number symbols";
        }

        if(!values.price){
            errors.price="required";
        }else if(isNaN(values.price)){
            errors.price="sould be only number symbols";
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            author: '',
            page: '',
            price: ''
        },
        validate,
        onSubmit: async values=>{
            fetch('https://apitester.pythonanywhere.com/api/books/' , {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' : `Token ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(values)
            })
            .then(res=>res.json())
            .then(json=>window.location.href="/main")
            .catch(err=>console.log(err))
        }
    });

    return(
        <div className=" add ">
            <div className="add-row">
                <div className="main ">
                    <div className="navbar navbar-light bg-dark header h1" style={{color: '#fff' , fontWeight: 'bold', paddingLeft: ''}}><div>Add book</div></div>
                    <form action='#' method="get" className='form' style={{margin: '20px auto'}} onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Book name</label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="book name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.touched.name && formik.errors.name && <small style={{color: 'red' , fontWeight: 'bold'}} className="form-text">{formik.errors.name}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="author">Author</label>
                            <input type="text" className="form-control" id="author" name="author" placeholder="author" value={formik.values.author} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.touched.author && formik.errors.author && <small style={{color: 'red' , fontWeight: 'bold'}} className="form-text">{formik.errors.author}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="page">Pages</label>
                            <input type="text" className="form-control" id="page" name="page"  placeholder="pages" value={formik.values.page} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.touched.page && formik.errors.page && <small style={{color: 'red' , fontWeight: 'bold'}} className="form-text">{formik.errors.page}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input type="text" className="form-control" id="price" placeholder="price" value={formik.values.price} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.touched.price && formik.errors.price && <small style={{color: 'red' , fontWeight: 'bold'}} className="form-text">{formik.errors.price}</small>}
                       
                        </div>
                        
                        <button style={{margin: '20px 10px',fontWeight: 'bold',width: '55%'}} type="submit" className="btn btn-danger ">Add</button>
                        <button style={{margin: '20px',fontWeight: 'bold',width: '30%'}} type="button" className="btn btn-warning " onClick={()=>window.location.href="/main"}>Back</button>
                    </form>
                </div>
                <Footer/>
           </div>     
        </div>
    );
}