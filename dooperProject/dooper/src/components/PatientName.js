import calendarEvent from "../images/calendarEvent.svg"
import clock from "../images/clock.svg"
import men2 from "../images/men2.svg"


export default function PatientName() {
    return (
        // Main Div
        <div className="h-[9.188rem] w-[21.875rem] border rounded-xl border-[#D3D3D3]">
            <div className="h-[4.438rem] w-full border-b border-[#E4E4E4] px-[1rem] py-[0.875rem] flex flex-col gap-2">
                <div className="h-[1.313rem] w-full flex justify-between items-center">
                    <div className="h-[1.313rem] w-[4.688rem] font-sans font-semibold text-[1.125rem] leading-[1.305rem] text-[#E40443]">#123456</div>
                    <div className="h-[0.875rem] w-[11.625rem] flex gap-2">
                        <div className="h-full w-[6.313rem] flex gap-2">
                            <img src={calendarEvent}></img>
                            <div className="h-full w-[4.938rem] text-[#5B6572] text-[0.75rem] font-sans font-medium">13 June, 2023</div>
                        </div>
                        <div className="h-full w-[4.813rem] flex gap-2">
                            <img src={clock}></img>
                            <div className="leading-[0.87rem] text-[#5B6572] text-[0.75rem] font-sans font-medium">09:00AM</div>
                        </div>
                    </div>
                </div>
                <div className="w-[15.688rem] h-[0.875rem] flex">
                    <div className="w-[4.813rem] h-full border-r pr-2 flex gap-[0.625rem] border-[#E40443]">
                        <h2 className="w-full h-full font-sans font-semibold text-[0.75rem] text-[#E40443] leading-[0.87rem] ">symptom 1</h2>
                    </div>
                    <div className="w-[5.438rem] h-full border-r px-2 flex gap-[0.625rem] border-[#E40443]">
                        <h2 className="w-full h-full font-sans font-semibold text-[0.75rem] text-[#E40443] leading-[0.87rem] ">symptom 2</h2>
                    </div>
                    <div className="w-[5.438rem] h-full px-2 flex gap-[0.625rem]">
                        <h2 className="w-full h-full font-sans font-semibold text-[0.75rem] text-[#E40443] leading-[0.87rem] ">symptom 3</h2>
                    </div>
                </div>
            </div>

            <div className="h-[4.75rem] w-[21.875rem] px-[0.75rem] py-[0.875rem] flex gap-4">
                <div className="w-[3rem] h-[3rem]">
                    <img src={men2}></img>
                </div>
                <div className="h-[2.5rem] w-[16.375rem] flex flex-col gap-2">

                    <div className="h-[1.375rem] w-[16.375rem] flex justify-between">
                        <div className="flex w-[8.063rem] h-[1.375rem] justify-between">
                            <h2 className="font-sans font-semibold text-[1.11rem] leading-[1.371rem] text-[#1A1C1F]">Patient Name</h2>
                        </div>
                        <div className="bg-[#FDF0CC] h-[1.25rem] w-[4.25rem] rounded-3xl gap-2 py-[0.313rem] px-[0.75rem]">
                            <p className="h-[0.625rem] w-[2.75rem] font-sans font-medium text-[0.625rem] leading-[0.625rem] text-[#1A1C1F]">Pending</p>
                        </div>
                    </div>

                    <div className="h-[0.875rem] w-[16.375rem] flex justify-between">
                        <div className="h-full w-[8.375rem] ">
                            <p className="text-[#5B6572] font-sans font-medium text-[0.75rem] leading-[0.87rem]">XYZ, street name, City</p>
                        </div>
                        <div className="w-[5.125rem] h-full">
                            <p className="text-[#5B6572] font-sans font-medium text-[0.75rem] leading-[0.87rem]">Earning : 400</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

