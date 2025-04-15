import "../style/footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-scroll";
const footer = () => {
  return (
    <>
      <footer className="footer">
        <div className=" footerIcones ">
          <Link href="">
            <FacebookIcon
              className="socialMediaIconsStyle"
              sx={{
                fontSize: "2em",
                margin: "0px 6px",
                color: "white",
              }}
            />
          </Link>
          <Link href="">
            <WhatsAppIcon
              className="socialMediaIconsStyle"
              sx={{
                fontSize: "2em",
                margin: "0px 6px",
                color: "white",
              }}
            />
          </Link>
          <Link href="khanyasar075@gmail.com">
            <EmailIcon
              className="socialMediaIconsStyle"
              sx={{ fontSize: "2em", margin: "0px 6px", color: "white" }}
            />
          </Link>
        </div>
        <div className="mx-auto">
          <p className=" text-center ">
            ©copyright 2025 :Yasar repair services.All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default footer;
