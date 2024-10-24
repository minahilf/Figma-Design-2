import Image from "next/image"
import logo from "../../image/logo.png"
export default function Header (){
    return(
    <div className="head">
      <Image className="logoh" src={logo} alt="" />
        <ul className = "items">
            <li>MAIN</li>
            <li>GALLERY</li>
            <li>PROJECTS</li>
            <li>CERTIFICATIONS</li>
            <li>CONTACT</li>
        </ul>
    </div>
    )
}