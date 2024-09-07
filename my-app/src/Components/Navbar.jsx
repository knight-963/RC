import './Navbar.css'
import pingvin from '../foto/pingvin.png'
import maroj from '../foto/maroj.png'
import marojni from '../foto/marojni.png'
import w from '../foto/w.jpg'
import a from '../foto/a.jpg'
import s from '../foto/s.jpg'
import d from '../foto/d.jpg'
import morj from '../foto/morj.png'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(){
  return (
    <div className="Navbar">


      <div className="nav">

        <img src={pingvin} alt="" />

        <div className='nav1'>

        <li><Link to="/"><h3>Home</h3></Link></li>
        <li><Link to="/about"><h3>Product</h3></Link></li>
        <li><Link to="/about"><h3>Pricing</h3></Link></li>
        <li><Link to="/about"><h3>Testimonials</h3></Link></li>
        <li><Link to="/reg"><h3>Contact Us</h3></Link></li>

        <div className='btr'><button>Buy Now</button></div>

        </div>






      </div>


      <div className="pasi">

        <div className="chap">
            <p>Sweet fun, full of milk</p>
            <h1>Feel inside cold with <br></br> our delicious ice-cream.</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem nisi facere, porro<br></br> cumque perspiciatis praesentium vitae neque! Unde facilis minus expedita,<br></br> similique sint fugit quia sit fugiat.</p>
            <div className='btn'><button>Buy Now</button></div>
        </div>

        <div className="ong">
        <img className='amg1' src={maroj} alt="" />
        <img className='amg' src={marojni} alt="" />
        </div>

      </div>


      <div className="ort">

        <button className='numbers'>
          <img className='ams' src={w} alt="" />
          <h3>Free Shipping</h3>
          <p>Last Chance! Free shipping on all orders ends today.</p>
        </button>

        <button className='numbers'>
          <img className='ams' src={a} alt="" />
          <h3>Quick Packaging</h3>
          <p>Last Chance! Free shipping on all orders ends today.</p>
        </button>

        <button className='numbers'>
          <img className='ams' src={s} alt="" />
          <h3>100% Money Back</h3>
          <p>Last Chance! Free shipping on all orders ends today.</p>
        </button>

        <button className='numbers'>
          <img className='ams' src={d} alt="" />
          <h3>Fast Delivery</h3>
          <p>Last Chance! Free shipping on all orders ends today.</p>
        </button>

      </div>


      <div className="pasidi">

        <div className="chap">
            <h1>Brown Sugar <br></br> Oatmea</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem nisi facere, porro<br></br> cumque perspiciatis praesentium vitae neque! Unde facilis minus expedita,<br></br> similique sint fugit quia sit fugiat.</p>
            <div className='btn'><button>See Details</button></div>
        </div>

        <img className='amd' src={morj} alt="" />

      </div>


    </div>
  );
}

export default Navbar;
