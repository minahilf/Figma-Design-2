import Image from "next/image"
import about1 from "../../image/about1.png"
import about2 from "../../image/about2.png"
import about3 from "../../image/about3.png"
export default function About(){
    return(
<div className="about">
  <div className="images">
  <Image src={about1} alt="" />
  <Image src={about2} alt="" />
  <Image src={about3} alt="" />
  </div>
  <div className="abouttext">
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eius eaque autem debitis aperiam harum! Consectetur deserunt aliquid, harum dolore molestias adipisci sequi nemo eligendi expedita cum quo quis eos aliquam quidem omnis asperiores. nfiejdeddddddebfur3bfou eonc<br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, culpa voluptatem. Aperiam cumque nisi delectus, saepe commodi quaerat perspiciatis aliquam necessitatibus illo qui quod illum repellat sint quasi harum culpa! Consectetur deserunt aliquid, harum dolore molestias adipisci<br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur vel nulla quos quia distinctio impedit aliquam esse iusto iste rerum, veritatis omnis non velit nostrum facere? Eveniet consectetur numquam repudiandae.</p>
    <div className="abutton">
  <button className="aboutbtn">READ MORE</button></div>
  </div>
</div>
    )
}