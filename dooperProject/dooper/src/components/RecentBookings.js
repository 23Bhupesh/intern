import PatientName from "./PatientName";


function RecentBookings() {

    return (
        // Main div
        <div className="h-[25.5rem] w-[22.094rem] flex flex-col gap-4">

            <div>
                <h2 className="h-[1.375rem] w-full text-[#1A1C1F] font-sans font-bold text-base">Recent Bookings</h2>
            </div>

            <div className="h-[23.125rem] w-full flex flex-col gap-4">
                <PatientName />
                <PatientName />
                <div className="h-[2.75rem] w-[21.875rem] rounded-lg px-6 flex items-center justify-center gap-3 bg-[#E40443]">
                    <p className="h-4 w-[9.188rem] font-sans font-bold text-[0.875rem] leading-[1.015rem] text-[white]">View Past Bookings</p>
                </div>
            </div>
        </div>
    )
};

export default RecentBookings;