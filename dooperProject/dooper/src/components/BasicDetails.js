import men2 from "../images/men2.svg";

function BasicDetails() {
  return (
    <div className="h-[51.125rem] w-[22.094rem] flex flex-col gap-6">
      <div className="h-[28.5rem] flex flex-col gap-4">
        <div className="h-[1.375rem] ">
          <h2 className="font-sans text-base font-bold leading-[1.375rem] text-[#1A1C1F]">
            Basic Details
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <img className=" w-[5.5rem] h-[5.5rem]" src={men2}></img>
        </div>
        <div className="h-[26.375rem] w-[22.094rem] flex flex-col gap-4">
          <div className="flex h-[1.875rem] w-full border-b-[1px] border-[#E3E6E8] pt-[0.25rem] pb-[0.75rem] gap-2">
            <div className="w-[8.75rem] h-[0.875rem] font-sans font-medium text-[0.75rem] leading-[0.87rem] text-[#8D98A4]">
              Full name :
            </div>
            <div className="w-[12.844rem] h-[0.875rem] font-sans font-medium text-[0.75rem] leading-[0.87rem] text-[#1A1C1F]">
              Jaydip Sakhiya
            </div>
          </div>
          <div className="flex h-[1.875rem] w-full border-b-[1px] border-[#E3E6E8] pt-[0.25rem] pb-[0.75rem] gap-2">
            <div className="w-[8.75rem] h-[0.875rem] font-sans font-medium text-[0.75rem] leading-[0.87rem] text-[#8D98A4]">
              Gender :
            </div>
            <div className="w-[12.844rem] h-[0.875rem] font-sans font-medium text-[0.75rem] leading-[0.87rem] text-[#1A1C1F]">
              Male
            </div>
          </div>
          <div className="flex h-[1.875rem] w-full border-b-[1px] border-[#E3E6E8] pt-[0.25rem] pb-[0.75rem] gap-2">
            <div className="w-[8.75rem] h-[0.875rem] font-sans font-medium text-[0.75rem] leading-[0.87rem] text-[#8D98A4]">
              Email :
            </div>
            <div className="w-[12.844rem] h-[0.875rem] font-sans font-medium text-[0.75rem] leading-[0.87rem] text-[#1A1C1F]">
              abc@xyz.com
            </div>
          </div>
          <div className="flex h-[1.875rem] w-full border-b-[1px] border-[#E3E6E8] pt-[0.25rem] pb-[0.75rem] gap-2">
            <div className="w-[8.75rem] h-[0.875rem] font-sans font-medium text-[0.75rem] leading-[0.87rem] text-[#8D98A4]">
              contact Number :
            </div>
            <div className="w-[12.844rem] h-[0.875rem] font-sans font-medium text-[0.75rem] leading-[0.87rem] text-[#1A1C1F]">
              1234567890
            </div>
          </div>
          <div className="flex h-[3.25rem] w-full border-b-[1px] border-[#E3E6E8] pt-[0.25rem] pb-[0.75rem] gap-2">
            <div className="w-[8.75rem] h-[0.875rem] font-sans font-medium text-[0.75rem] leading-[0.87rem] text-[#8D98A4]">
              Address :
            </div>
            <div className="w-[12.844rem] h-[0.875rem] font-sans font-medium text-[0.75rem] leading-[1.095rem] text-[#1A1C1F]">
              2800 Oakwood Avenue, New York, NY 10018
            </div>
          </div>
          <div className="flex h-[1.875rem] w-full border-b-[1px] border-[#E3E6E8] pt-[0.25rem] pb-[0.75rem] gap-2">
            <div className="w-[8.75rem] h-[0.875rem] font-sans font-medium text-[0.75rem] leading-[0.87rem] text-[#8D98A4]">
              City :
            </div>
            <div className="w-[12.844rem] h-[0.875rem] font-sans font-medium text-[0.75rem] leading-[0.87rem] text-[#1A1C1F]">
              Surat
            </div>
          </div>
          <div className="flex h-[1.875rem] w-full border-b-[1px] border-[#E3E6E8] pt-[0.25rem] pb-[0.75rem] gap-2">
            <div className="w-[8.75rem] h-[0.875rem] font-sans font-medium text-[0.75rem] leading-[0.87rem] text-[#8D98A4]">
              State :
            </div>
            <div className="w-[12.844rem] h-[0.875rem] font-sans font-medium text-[0.75rem] leading-[0.87rem] text-[#1A1C1F]">
              Gujarat
            </div>
          </div>
        </div>
      </div>

      <div className="h-[10.875rem] w-full flex flex-col gap-4">
        <div className="h-[1.375rem] w-[22.313rem] text-[#1A1C1F] font-sans font-bold text-base leading-[1.375rem]">
          Self Assessment
        </div>
        <div className="h-[0.875rem] w-full justify-between flex ">
          <p className="w-[8.313rem] font-sans font-medium text-xs leading-[0.87rem] text-[#1A1C1F]">
            Self Assesment Photo
          </p>
          <p className="w-[1.875rem] font-sans font-medium text-xs leading-[0.87rem] text-[#E40443] underline">
            View
          </p>
        </div>
        <div className="h-[6.625rem] flex flex-col gap-4 w-full ">
          <div className="flex h-[1.875rem] w-full border-[1px] rounded-[0.5rem] border-[#EEF0F3] justify-between bg-[#F4F4F4]  gap-1 py-[0.5rem] px-[1.25rem]">
            <div className="h-[0.875rem] font-sans font-medium text-xs leading-[0.87rem] text-[#5B6572]">
              Height
            </div>
            <div className="h-[0.875rem] font-sans font-medium text-xs leading-[0.87rem] text-[#5B6572]">
              5 ft 5"
            </div>
          </div>
          <div className="flex h-[1.875rem] w-full border-[1px] rounded-[0.5rem] border-[#EEF0F3] justify-between bg-[#F4F4F4]  gap-1 py-[0.5rem] px-[1.25rem]">
            <div className="h-[0.875rem] font-sans font-medium text-xs leading-[0.87rem] text-[#5B6572]">
              Weight
            </div>
            <div className="h-[0.875rem] font-sans font-medium text-xs leading-[0.87rem] text-[#5B6572]">
              63
            </div>
          </div>
          <div className="flex h-[1.875rem] w-full border-[1px] rounded-[0.5rem] border-[#EEF0F3] justify-between bg-[#F4F4F4]  gap-1 py-[0.5rem] px-[1.25rem]">
            <div className="h-[0.875rem] font-sans font-medium text-xs leading-[0.87rem] text-[#5B6572]">
              Blood Group
            </div>
            <div className="h-[0.875rem] font-sans font-medium text-xs leading-[0.87rem] text-[#5B6572]">
              O+
            </div>
          </div>
        </div>
      </div>

      <div className="h-[10.875rem] w-full flex flex-col gap-4">
        <div className="h-[1.375rem] w-[22.313rem] text-[#1A1C1F] font-sans font-bold text-base leading-[1.375rem]">
          Medical History
        </div>
        <div className="h-[4.25rem] w-full flex flex-col gap-2">
        <div className="flex h-[1.875rem] w-full border-b-[1px] border-[#E3E6E8] pt-[0.25rem] pb-[0.75rem] gap-2">
            <div className="w-[8.75rem] h-[0.875rem] font-sans font-medium text-[0.75rem] leading-[0.87rem] text-[#8D98A4]">
              Disease name :
            </div>
            <div className="w-[12.844rem] h-[0.875rem] font-sans font-medium text-[0.75rem] leading-[0.87rem] text-[#1A1C1F]">
              Diabetes
            </div>
          </div>
          <div className="flex h-[1.875rem] w-full border-b-[1px] border-[#E3E6E8] pt-[0.25rem] pb-[0.75rem] gap-2">
            <div className="w-[8.75rem] h-[0.875rem] font-sans font-medium text-[0.75rem] leading-[0.87rem] text-[#8D98A4]">
              Duration :
            </div>
            <div className="w-[12.844rem] h-[0.875rem] font-sans font-medium text-[0.75rem] leading-[0.87rem] text-[#1A1C1F]">
              3 years
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicDetails;
