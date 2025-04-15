import Data from "./Data";
import Card from "./Card";
import "../style/card.css";
const Services = () => {
  return (
    <div style={{ backgroundColor: "#E9ECEF" }} id="services">
      <div className="container mt-5 py-5">
        <div className="text-center">
          <p>What I Do</p>
          <h1 className="about-heading">services</h1>
          <p>
            My services cover mobile damage, screen failures, software issues,
            and motherboard repairs etc.
          </p>
        </div>
        <div className="container  mt-5">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row gy-4 justify-content-center myrow">
                {Data.map((val, key) => {
                  return (
                    <Card
                      img={val.img}
                      name={val.name}
                      description={val.text}
                      key={key}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
