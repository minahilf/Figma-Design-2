import Image from "next/image"
import one from "../../image/one.png"
import two from "../../image/two.png"
export default function Main(){
    return(
        <div className="maintext">
        <h1 className="mainheading">Main Focus/Mission Statement</h1>
        <div className="boxmain">
        <Image className="onepic" src={one} alt="" />
        <span className="mainp">Lorem ipsum dolor sit amet  <br />consectetur adipisicing elit. <br /> Ea molestiae omnis fugiat corrupti pariatur! <br />Lorem ipsum dolor sit amet consectetur 
        </span>
        <Image className="onepic" src={two} alt="" />
        <span className="mainp">Lorem ipsum dolor sit amet  <br />consectetur adipisicing elit. <br /> Ea molestiae omnis fugiat corrupti pariatur! <br />Lorem ipsum dolor sit amet consectetur 
        </span>
        </div>
        </div>
    )
}

