import Avatar from "@assets/image-jeremy.png";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="mb-6 flex items-center gap-6 rounded-2xl bg-purple-600 p-8 lg:h-[354px] lg:flex-col lg:items-start lg:gap-10">
      <span className="size-16 overflow-auto rounded-full border-3 border-white lg:size-[78px]">
        <Image src={Avatar} alt="Jeremy Robson" width={234} height={234} className="rounded-full" />
      </span>
      <div className="space-y-2">
        <p className="text-preset-5 font-normal text-gray-200">Report for</p>
        <p className="text-preset-4 font-light text-white lg:text-4xl lg:leading-[47px]">Jeremy Robson</p>
      </div>
    </div>
  );
}
