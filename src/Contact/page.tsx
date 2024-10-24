import Image from "next/image"
import contact from "../../image/contact.png"
export default function Contact() {
    return (
        <div className="contact">
            <h1 className="mainheadingc">Contact Us</h1>

            <div className="contactform">
                <div className="cform">
                    <form className="contactf">
                        <input type="text" name="name" id="name" placeholder="Name" />
                        <input type="number" name="phone" id="phone" placeholder="Phone Number" />
                        <input type="email" name="email" id="email" placeholder="Email" />
                        <input type="text" name="interested" id="intrst" placeholder="Interested In" />
                        <textarea name="msg" rows={5} cols={30} id="msg" placeholder="Message"></textarea>

                    <div className="fbutton">
                        <button className="fbtn">SEND EMAIL</button>
                    </div>
                    </form>
                </div>
                <div className="cimg">
                    <Image src={contact} alt="" />
                </div>
            </div>
        </div>
    )
}


