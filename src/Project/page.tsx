import Image from "next/image";
import project from "../../image/project.png";
import project1 from "../../image/project1.png";
import project2 from "../../image/project2.png";
import project3 from "../../image/project3.png";
import project4 from "../../image/project4.png";

export default function Project() {
  return (
    <div className="projects">
      <h1 className="mainheadingp">Our Projects</h1>
      <div className="projectpics">
        <div className="projectcont">
          <Image className="ppic" src={project} alt="" />
          <div className="overlaytext">
            <h2>Sample <br /> Project</h2>
            <p>VIEW MORE</p>
          </div>
        </div>
        <Image className="ppic" src={project1} alt="Project 1" />
        <Image className="ppic" src={project2} alt="Project 2" />
        <Image className="ppic" src={project3} alt="Project 3" />
        <Image className="ppic" src={project4} alt="Project 4" />
      </div>
      <div className="pbutton">
      <button className="pbtn">ALL PROJECTS</button>
      </div>
    </div>
  );
}
