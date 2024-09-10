import './page2.css'
import foto1 from '../foto/foto1.jpg'

function Page2(){
  return (
    <div className="Page2">

      <h1 className='rt'>Make your dream </h1>
      <h1 className='rt'>business goal come true</h1>

      <h1 className='tr'>when you need us for improve your business,</h1>
      <h1 className='tr'>then come with us to help your business have reach it, you just sit and feel that goal</h1>

      <div className='bt'><button><h3>Start Project</h3></button></div>

      <div className="ds">
        <img src={foto1} alt="" />
      </div>
      
    </div>
  );
}

export default Page2;
