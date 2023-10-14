import logo from "../images/logo.svg"
import phone from "../images/phone.svg"
import mail from "../images/mail.svg"

function ConnectWithUs() {
    return(

        <div className="bg-blue-100">
            <div>
                <img src={logo}></img>
            </div>

            <div>
                <div className="flex">
                    <div>
                        <img src={phone}></img>
                    </div>
                    <div>
                        <p>Phone</p>
                        <p>+ 123 456 7890</p>
                    </div>
                </div>

                <div className="flex">
                    <div>
                        <img src={mail}></img>
                    </div>
                    <div>
                        <p>Mail</p>
                        <p>info@dooper.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ConnectWithUs;