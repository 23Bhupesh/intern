import BasicDetails from "./BasicDetails";
import PatientDetails from "./PatientDetails";
import RecentBookings from "./RecentBookings";
import Line from "./Line";
import FamilyMembers from "./FamilyMembers";




export default function MainContent() {
    return(
        <div className="w-full h-[74.625rem] px-[3.5rem] pb-[1.5] flex flex-col gap-4 bg-[#F4F4F4] ">

            <div>
                <PatientDetails />
            </div>

            <div className="w-full h-[67.625rem] flex gap-4">
                <div className="rounded-2xl p-5 gap-3 flex bg-white">
                    <BasicDetails />
                    <Line />
                    <FamilyMembers />
                    <Line />
                    <RecentBookings />
                </div>
            </div>

        </div>
    )
};

