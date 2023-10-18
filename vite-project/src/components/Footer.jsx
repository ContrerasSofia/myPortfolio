// We use JSX curly braces to evaluate the style object
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <footer className='bg-dark text-white text-center py-3 p-3'>
            <div className="container ">
            <div className="row justify-content-around">
              <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-white mr-3 col-3">
                <FaGithub  size={40}/> 
              </a>
              <a href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="text-white mr-3 col-3">
                <FaLinkedin size={40} /> 
              </a>
              <a href="mailto:tuemail@example.com" className="text-white col-3">
                <FaEnvelope size={40}/> 
              </a>
            </div>
        </div>
        </footer>
        
    );
  }
  
  export default Footer;
      

  