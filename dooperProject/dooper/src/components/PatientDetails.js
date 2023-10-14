import arrowLeft from "../images/arrowLeft.svg"
import edit from "../images/edit.svg"


function PatientDetails() {
    return (
        <div className="bg-[#F4F4F4]">
            <div className=" h-[4.5rem] flex justify-between">
                <div className="flex h-[2rem] w-[12.688rem] gap-2 my-auto">
                    <img className="h-[1.5rem] w-[1.5rem] my-auto" src={arrowLeft}></img>
                    <p className="h-[2rem] w-[10.688rem] font-sans text-[1.375rem] leading-[2rem] font-bold text-[#1A1C1F]">Patient Details</p>
                </div>
                <div className="my-auto">
                    <img src={edit}></img>
                </div>
            </div>
        </div>
    )
};

export default PatientDetails;