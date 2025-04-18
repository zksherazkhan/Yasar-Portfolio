import "../style/about.css";
import aboutImg from "../assets/yasarImg.png";

const About = () => {
  const margintop = {
    marginTop: "-5px",
  };

  return (
    <>
      <div className="container mt-5 text-center " id="about">
        <p>Who am I</p> <h1 className="about-heading">About Me</h1>
        <p style={margintop}>
          Experienced phone repair technician with 8 years in the field.
        </p>
        <div className="about-description mt-5">
          <div className="row about-row">
            <div className="col-md-5 ">
              <div className="about-img">
                <div
                  className="myImg"
                  style={{ backgroundImage: `URL(${aboutImg})` }}
                ></div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="about-text">
                <h1 className="text-start">Discover</h1>
                <p>
                  With a passion for technology and a commitment to excellence,
                  I have been a dedicated phone repair technician since 2014. My
                  journey began at Tariq Mobile Zone in Mingora, Swat, where I
                  honed my skills in diagnosing and repairing a variety of
                  mobile devices. In 2019, I joined Talha Investment, where I
                  continue to provide top-notch repair services. My expertise
                  includes addressing software issues , screen
                  replacements,charging problems, motherboard repairs etc
                  ensuring that every device I work on is restored to optimal
                  performance. I pride myself on delivering high-quality
                  service, attention to detail, and a customer-centric approach,
                  making sure that every client leaves satisfied with their
                  repaired device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
