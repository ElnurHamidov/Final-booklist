import insta from './images/insta.webp';
import whatsapp from './images/whatsapp.webp';
import facebook from './images/facebook.webp';
import linkedin from './images/linkedin.png';
import github from './images/github.png';


export default function Footer(){

    return(
        <footer className="footer bg-dark text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a target="_blank" rel="noopener noreferrer" className="btn  btn-floating m-1" href="https://www.instagramm.com/gamidovelnur" role="button"
                        ><img src={insta} alt="instagramm" style={{width: '30px' , heigth: '30px'}} /></a>
                    <a target="_blank" rel="noopener noreferrer" className="btn  btn-floating m-1" href="https://wa.me/+994708221706" role="button"
                        ><img src={whatsapp} alt="whatsapp" style={{width: '30px' , heigth: '30px'}} /></a>
                    <a target="_blank" rel="noopener noreferrer" className="btn  btn-floating m-1" href="https://www.facebook.com/elnur.gamidov.54" role="button"
                        ><img src={facebook} alt="facebook" style={{width: '30px' , heigth: '30px'}} /></a>
                    <a target="_blank" rel="noopener noreferrer" className="btn  btn-floating m-1" href="linkedin.com/in/elnur-hamidov-685737216" role="button"
                        ><img src={linkedin} alt="linkedin" style={{width: '30px' , heigth: '30px'}} /></a>
                    <a target="_blank" rel="noopener noreferrer" className="btn  btn-floating m-1" href="https://github.com/ElnurHamidov" role="button"
                        ><img src={github} alt="github" style={{width: '30px' , heigth: '30px', borderRadius: '50%'}} /></a>
                    
                </section>
            </div>
            <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                <span className="text-white">My contacts</span>
            </div>
        </footer>
    );
}