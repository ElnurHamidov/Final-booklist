import logo from './images/avatar.svg';
import {Link} from 'react-router-dom';
import {useFormik} from 'formik';

export default function FormLog(){


    function validate(values){
        const errors={};

        if(!values.username){
            errors.username="Required";
        }else if(values.username.length<3 || values.username.length>8){
            errors.username="Should be 3-8 symbols"
        }

        if(!values.password){
            errors.password="Required";
        }else if(values.password.length<3 || values.password.length>8){
            errors.password="Should be 3-8 symbols";
        }else if(values.password==='123456'){
            errors.password='Shouldn\'t be \'123456\'';
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validate,
        onSubmit: async values=>{
            fetch('https://apitester.pythonanywhere.com/api/user/login', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(values)
            })
            .then(res=>res.json())
            .then(json=>{
                if(!json.token){
                    alert('User not found');
                    return;
                }
                localStorage.setItem('name' , json.username);
                localStorage.setItem('token' , json.token);
                window.location.href="/book-list/main";
            })
            .catch(error=>console.log(error));
        }
    });

    return(
        <form action="#" name="form" className="form" onSubmit={formik.handleSubmit}>
            <div style={{textAlign: 'center'}}><img style={{width: '100px' , heigth: '100px'}} src={logo} alt="login_logo" /></div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" placeholder="username" name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.touched.username && formik.errors.username && <small style={{color: 'red' ,fontWeight: 'bold' }} className="form-text">{formik.errors.username}</small>}
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder=" password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.touched.password && formik.errors.password && <small style={{color: 'red' ,fontWeight: 'bold' }} className="form-text">{formik.errors.password}</small>}
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <button type="submit" className="btn btn-dark form-btn" >Log in</button>
                <Link style={{color: '#fff' , margin: '20px 20px 0 20px'}} to="/registration">Registration</Link>
            </div>
        </form>
    );
}