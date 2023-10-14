import insta from "../images/insta.svg"
import fb from "../images/fb.svg"
import linkedin from "../images/linkedin.svg"
import logo from "../images/logo.svg"
import phone from "../images/phone.svg"
import mail from "../images/mail.svg"

function FooterUp() {
  return (
    <div className="flex h-[20.938rem] w-full px-4 pt-[3rem] gap-[2.5rem] justify-around bg-[#B60336] text-white font-sans
    ">
      

      {/* Section-1 */}

      <div className="h-[11.5rem] flex flex-col gap-8 ">
        <div className="h-[2.75rem]">
          <img src={logo}></img>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex h-[2.625rem] gap-3">
            <div className="h-[2.5rem] w-[2.5rem]">
              <img src={phone}></img>
            </div>
            <div className="flex flex-col gap-2">
              <p className="h-4 w-[2.938rem] font-medium text-[0.875rem] leading-[1.015rem]">Phone</p>
              <p className="h-[1.125rem] w-[7.313rem] font-medium text-[1rem] leading-[1.1rem]">+ 123 456 7890</p>
            </div>
          </div>

          <div className="flex h-[2.625rem] gap-3">
            <div className="h-[2.5rem] w-[2.5rem]">
              <img src={mail}></img>
            </div>
            <div className="flex flex-col gap-2">
              <p className="h-4 w-[2.938rem] font-medium text-[0.875rem] leading-[1.015rem]">Mail</p>
              <p className="h-[1.125rem] w-[7.313rem] font-medium text-[1rem] leading-[1.1rem]">info@dooper.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section-2 */}

      <div className="h-[15.5rem] w-[12.531rem] flex flex-col gap-2">
        <div className="h-[4.375rem] py-6 gap-2">
          <h2 className="h-[1.375rem] font-semibold font-sans text-lg leading-[1.35rem]">Quick Links</h2>
        </div>
        <div className="h-[10.625rem] flex flex-col gap-5">
          <li className="h-[1.125rem] font-medium text-base leading-[1.1rem]">Pricing</li>
          <li className="h-[1.125rem] font-medium text-base leading-[1.1rem]">Doctors</li>
          <li className="h-[1.125rem] font-medium text-base leading-[1.1rem]">Services</li>
          <li className="h-[1.125rem] font-medium text-base leading-[1.1rem]">Testimonials</li>
          <li className="h-[1.125rem] font-medium text-base leading-[1.1rem]">FAQs</li>
        </div>
      </div>

      {/* Section-3 */}

      <div className="h-[10.75rem] w-[12.531rem] flex flex-col gap-2">
        <div className="h-[4.375rem] py-6 gap-2">
          <h2 className="h-[1.375rem] font-semibold font-sans text-lg leading-[1.35rem]">Other</h2>
        </div>
        <div className="h-[5.875rem] flex flex-col gap-5 ">
          <li className="h-[1.125rem] font-medium text-base leading-[1.1rem]">Make Appointment</li>
          <li className="h-[1.125rem] font-medium text-base leading-[1.1rem]">Emergency Call</li>
          <li className="h-[1.125rem] font-medium text-base leading-[1.1rem]">Testimonials</li>
        </div>
      </div>

      {/* Section-4 */}

      <div className="h-[10.75rem] w-[12.531rem] flex flex-col gap-2">
        <div className="h-[4.375rem] w-[3.063rem] py-6 gap-2">
          <h2 className="h-[1.375rem] w-[3.063rem] font-semibold font-sans text-lg leading-[1.35rem]">Links</h2>
        </div>
        <div className="h-[5.875rem] w-[12.531rem] flex flex-col gap-5 ">
          <li className="h-[1.125rem] w-[4.375rem] font-medium text-base leading-[1.1rem]">Blogs</li>
          <li className="h-[1.125rem] w-[8.5rem] font-medium text-base leading-[1.1rem]">privacy Policy</li>
          <li className="h-[1.125rem] w-[12.625rem] font-medium text-base leading-[1.1rem]">Terms and Conditions</li>
        </div>
      </div>

      {/* Section-5 */}

      <div className=" flex flex-col h-[7.125rem] w-[12.531rem] gap-2">
        <div className="h-[4.125rem] w-[9rem] py-6 gap-2">
          <h2 className="h-[1.125rem] w-[9rem] font-semibold font-sans text-base leading-[1.1rem]">Connect With Us</h2>
        </div>
        <div className="flex gap-4">
          <img src={insta} alt="logo" />
          <img src={fb} alt="log"></img>
          <img src={linkedin} alt="logo"></img>
        </div>
      </div>
    </div>
    
  );
}

export default FooterUp;
