import Image from "next/image";
import pic from "../../image/pic.png"
import About from "@/About/page";
import Main from "@/Main/page";
import Project from "@/Project/page";
import Contact from "@/Contact/page";
export default function Home() {
  return (
<div className="cont">
  <div className="text">
<h1 className="Main">PROJECT</h1>
<h2 className="Main2">Lorum</h2>
</div>
<div className="img-cont">
<Image className="pic" src={pic} alt="" />
<div className="view">VIEW PROJECT</div>
</div>
<About/>
<Main/>
<Project/>
<Contact/>
</div>
  );
}
