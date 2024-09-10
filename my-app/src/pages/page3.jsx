import './page3.css'
import foto2 from '../foto/foto2.jpg'


function Page3(){
  return (
    <div className="Page3">

      <h1 className='s'>About Us</h1>
      <h1 className='w'>Our Teammate</h1>

      <div className="ht">

        <img src={foto2} alt="" />

        <div className='t'>

          <p>We move with make a Creative Strategy for help your business<br></br> goal, we help to improve your income by a services we have.<br></br> make your content look interesting and make people look for<br></br> your business</p>
          <br></br><br></br>
          <p>We move with make a Creative Strategy for help your business<br></br> goal, we help to improve your income by a services we have.<br></br> make your content look interesting and make people look for<br></br> your business</p>

          <div className="x">

            <button className='y'><h3>About Us</h3></button>
            <button className='u'><h3>Our Story</h3></button>

          </div>
          
        </div>

      </div>
      
    </div>
  );
}

export default Page3;
