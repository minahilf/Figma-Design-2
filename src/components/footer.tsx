import Image from "next/image";
import facebook from "../../image/facebook.png";
import linkedin from "../../image/LinkedIn.png";
import location from "../../image/location.png";
import msg from "../../image/msg.png";
import twitter from "../../image/twitter.png";
import pint from "../../image/pint.png";
import phone from "../../image/phone.png";
import logo from "../../image/logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <Image src={logo} alt="logo"  />
      </div>

      <div className="footerinfo">
        <div className="info">
          <h4>Information</h4>
          <ul>
            <li>Main</li>
            <li>Gallery</li>
            <li>Projects</li>
            <li>Certifications</li>
            <li>Contacts</li>
          </ul>
        </div>

        <div className="contact">
          <h4>Contacts</h4>
          <ul>
            <li><Image src={location} alt="Location" width={10} height={20}/> 1234 Sample Street, <br /> Austin Texas 78704</li>
            <li><Image src={phone} alt="Phone" width={20} height={20} /> 512.333.2222</li>
            <li><Image src={msg} alt="Email" width={20} height={20} /> sampleemail@gmail.com</li>
          </ul>
        </div>

        <div className="social">
          <h4>Social Media</h4>
          <div className="acc">
            <Image src={facebook} className="fb" alt="Facebook" width={20} height={20} />
            <Image src={twitter} className="icons" alt="Twitter" width={20} height={20} />
            <Image src={linkedin} className="icons" alt="LinkedIn" width={20} height={20} />
            <Image src={pint} className="icons" alt="Pinterest" width={20} height={20} />
          </div>
        </div>
      </div>
      <div className="copy">
        © 2024 All Rights Reserved
      </div>
    </div>
  );
}
