import logoRed from "../images/logoRed.svg"
import phoneRed from "../images/phoneRed.svg"
import notificationIcon from "../images/notificationIcon.svg"
import men from "../images/men.svg"
import dropDown from "../images/dropDown.svg"
import dropDownGrey from "../images/dropDownGrey.svg"


function Navbar() {
    return (
        <div className="h-[7.75rem] w-full border-b-[1px] py-[2.5rem] flex gap-2 border-[#E3E6E8] ">
            <div className="flex h-[2.75rem] w-[84.73%] mx-auto justify-between">
                <div className="h-9 mt-1">
                    <img src={logoRed}></img>
                </div>
                <div className="flex gap-4">
                    <div className="flex gap-6 my-auto">
                        <div className="h-4 font-sans font-medium text-sm leading-[1.0115rem] text-[#8D98A4]">Dooper At Home</div>
                        <div className="h-4 font-sans font-medium text-sm leading-[1.0115rem] text-[#8D98A4]">Lab Tests</div>
                        <div className="flex gap-1">
                            <p className="h-4 font-sans font-medium text-sm leading-[1.0115rem] text-[#8D98A4]">our Network</p>
                            <img className="h-[1rem] w-[1rem]" src={dropDownGrey}></img>
                        </div>
                        <div className="h-4 font-sans font-medium text-sm leading-[1.0115rem] text-[#8D98A4]">About Us</div>
                        <div className="h-4 font-sans font-medium text-sm leading-[1.0115rem] text-[#8D98A4]">Contact Us</div>
                        <div className="flex gap-1">
                            <p className="h-4 font-sans font-medium text-sm leading-[1.0115rem] text-[#8D98A4]">Join us with</p>
                            <img className="h-[1rem] w-[1rem]" src={dropDownGrey}></img></div>
                    </div>
                    <div className="flex border-[0rem] gap-1 rounded-lg border-[#F5F6F7] bg-[#F4F4F4]">
                        <div className="my-auto">
                            <img className="" src={men}></img>
                        </div>
                        <div className="my-auto h-[1rem] ">
                            <p className="h-4 gap-2 font-sans font-medium text-[0.6rem] leading-[1.015rem] text-[#38404A]">Jaydip Sakhiya</p>
                        </div>
                        <div className="my-auto h-[1rem] w-[1rem]">
                            <img src={dropDown}></img>
                        </div>
                    </div>
                    <div className="h-[2.5rem] w-[2.5rem] m-auto">
                        <img src={notificationIcon}></img>
                    </div>
                    <div className="h-[2.75rem] w-[2.75rem] ">
                        <img src={phoneRed}></img>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;