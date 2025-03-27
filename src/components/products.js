import one from "../images/perfone.jpeg"
import two from "../images/perftwo.jpeg"
import three from "../images/perfthree.jpeg"

function Blocks(){
    return(
      <div>
      <div className="imgsec">
  
        <div className="img">
        <img src={one} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quidem labore corporis repellat praesentium eveniet.</p>
        </div>
  
        <div className="img">
        <img src={two} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quidem labore corporis repellat praesentium eveniet.</p>
        </div>
  
        <div className="img">
        <img src={three} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quidem labore corporis repellat praesentium eveniet.</p>
        </div>
  
      </div>
  
  <div className="imgsec">
  
  <div className="img">
  <img src={one} alt="" />
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quidem labore corporis repellat praesentium eveniet.</p>
  </div>
  
  <div className="img">
  <img src={two} alt="" />
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quidem labore corporis repellat praesentium eveniet.</p>
  </div>
  
  <div className="img">
  <img src={three} alt="" />
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quidem labore corporis repellat praesentium eveniet.</p>
  </div>
  
  </div>
  </div>
    )
  }
  export default Blocks