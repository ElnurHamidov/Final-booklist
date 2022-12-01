import books from './images/books.webp';
import FormLog from './FormLog';
import Footer from './Footer';
import {useEffect} from 'react';

export default function LogIn(){

    useEffect(()=>localStorage.clear() ,[]);

    return(
        <div className="wrapper bg-secondary">
            <nav className="navbar navbar-light bg-dark header">
                <div className="display-4 text-light">Booklist</div>
                <div className="h4 text-light">App created by Hamidov Elnur</div>
            </nav>
        <div className="main container">
            <div className="row">
                <div className="col-md-6">
                    <img src={books} alt="books" className='img-fluid' style={{padding: '20px 0px'}}/>
                </div>
                <div className="col-md-6">
                    <FormLog />
                </div>
            </div>
        </div>
        <Footer />
        </div>
    );
}