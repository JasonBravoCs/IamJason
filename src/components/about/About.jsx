import "./about.css";
import Award from "../../img/award.png";
import Me from "../../img/me.png"
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className="i-img" />
          
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
         Hi there I'm a 23-year-old certified technician and aspiring computer 
         scientist from Pomona, California . Throughout my work experience ,
         I've gained valuable skills from various jobs, enriching my toolkit 
         I've learned the importance of attention to detail, problem-solving, 
         and effective communication, skills that have proven invaluable as I've 
         navigated through different roles and challenges. Now, as I 
         embark on my journey in computer science, I'm eager to apply this wealth
          of knowledge and skills to tackle new and exciting challenges in the 
          field. In the mean time, if you're seeking a versatile team player who will
         meet your needs, I believe I could be the right fit for your team. 
         Let's collaborate and achieve great things together.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
          <h4 className="a-award-title">ASSOCIATE DEGREE FOR TRANSFER (ADT) IN COMPUTER SCIENCE- 2023</h4>
            <p className="a-award-desc">
              
            </p>
            <h4 className="a-award-title">CERTIFICATE IN AUTOMOTIVE SERVICE, DIAGNOSIS AND REPAIR - UNDERCAR DRIVETRAIN SPECIALIST- 2022</h4>
            <p className="a-award-desc">
              
            </p>
            <h4 className="a-award-title">CERTIFICATE IN AUTOMOTIVE SERVICE, DIAGNOSIS AND REPAIR - UNDERHOOD SPECIALIST- 2022</h4>
            <p className="a-award-desc">
              
            </p>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
