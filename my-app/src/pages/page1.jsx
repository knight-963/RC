import './page1.css'
import logo from '../foto/logo.png'

function Page1(){
  return (
    <div className="Page1">

        <div className='navbar'>

        <img src={logo} alt="" />

        <div className="nv">

          <h2>Home</h2>

          <h2>About</h2>

          <h2>Services</h2>

          <h2>Projects</h2>

        </div>

        <div className="gf">

          <button><h3>Contact us</h3></button>

        </div>

        </div>
      
    </div>
  );
}

export default Page1;
