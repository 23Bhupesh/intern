import icBlack from "../images/icBlack.svg"
import icGrey from "../images/icGrey.svg"
import BasicDetails from "./BasicDetails"


export default function () {
    return (
        <div className="w-[22.313rem] h-[65.125rem] flex flex-col gap-4">

            <div className="h-[1.375rem] w-full ">
                <p className="text-[#1A1C1F] font-sans font-bold text-base">Family members</p>
            </div>

            <div className="h-[62.75rem] flex flex-col gap-3">

                <div className="h-[2.375rem] w-[11.25rem] flex justify-between py-[0.438rem] gap-[0.625rem]">
                    <p className="w-[3.813rem] h-[1.25rem] text-[#1A1C1F] font-sans font-semibold text-base leading-[1.219]">Mother</p>
                    <img className="h-6 w-6 " src={icBlack}></img>
                </div>


                <div>
                    <BasicDetails />
                </div>


                <div>

                    <div className="h-[2.375rem] w-[11.25rem] flex justify-between py-[0.438rem] gap-[0.625rem]">
                        <p className="w-[3.813rem] h-[1.25rem] text-[#1A1C1F] font-sans font-semibold text-base leading-[1.219]">Father</p>
                        <img className="h-6 w-6 " src={icGrey}></img>
                    </div>

                    <div className="h-[2.375rem] w-[11.25rem] flex justify-between py-[0.438rem] gap-[0.625rem]">
                        <p className="w-[3.813rem] h-[1.25rem] text-[#1A1C1F] font-sans font-semibold text-base leading-[1.219]">Wife</p>
                        <img className="h-6 w-6 " src={icGrey}></img>
                    </div>

                    <div className="h-[2.375rem] w-[11.25rem] flex justify-between py-[0.438rem] gap-[0.625rem]">
                        <p className="w-[3.813rem] h-[1.25rem] text-[#1A1C1F] font-sans font-semibold text-base leading-[1.219]">Brother</p>
                        <img className="h-6 w-6 " src={icGrey}></img>
                    </div>

                </div>

            </div>
        </div>
    )
};