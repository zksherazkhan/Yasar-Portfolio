import React from "react";
import "../style/contact.css";
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
const Contact = () => {
  return (
    <>
      <div className="container-fluid bg-black p-5 " id='contact'>
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row gy-4">
              <div className="col-sm-4  coll">
                <AppSettingsAltIcon
                sx={
                  {
                    fontSize:"6em"
                  }
                }
                 />
                <p className="display-6 pt-3">
                  PHONE
                  <br />
                  <span className="repair">REPAIR</span>
                </p>
              </div>
              <div className="col-sm-4  contactDetails">
                <h3 >Get in Touch</h3>
                <div className=" mt-3">
                  <p>
                    Phone : +267 76691829
                    <br />
                    Email: khanyasar075@gmail.com
                    <br />
                    Address:Xhosa 1 ,Central Distric Mahalapye Botswana
                  </p>
                </div>
              </div>
              <div className="col-sm-4 px-5" style={{color:"white"}}>
                <h3>Send Message</h3>
                <form className="mt-3">
                  <div class="form-group mb-2">
                    <label for="exampleFormControlInput1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div class="form-group mb-2">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Message
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Write something.."
                      rows="2"
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-full  contact-btn">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
