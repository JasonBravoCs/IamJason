import "./intro.css";
import Me2 from "../../img/me2.png";
// Declaring a constant variable named Intro and assigning it a function expression
// Function body...
const Intro = () => {
  return (
    /* This <div> represents a section with the CSS class "i" */
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Jason Bravo</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Student</div>
              <div className="i-title-item">Computer Science Major</div>
            </div>
          </div>
          <p className="i-desc">
          I'm dedicated to continual learning and skill development, 
          always seeking new opportunities to expand my expertise and make a
           meaningful impact.
          </p>
        </div>
        
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me2} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
