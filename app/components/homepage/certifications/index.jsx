// @flow strict

import { certifications } from "@/utils/data/certifications";
import Image from "next/image";
import { FaAward, FaCertificate } from "react-icons/fa";
import Marquee from "react-fast-marquee";

function Certifications() {
  return (
    <div id="certifications" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certifications & Awards
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {certifications.map((cert) => (
            <div 
              className="w-64 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={cert.id}
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-12 sm:h-14 text-violet-500 transition-all duration-300 group-hover:scale-125">
                    {cert.type === "award" ? (
                      <FaAward size={48} />
                    ) : (
                      <FaCertificate size={48} />
                    )}
                  </div>
                  <p className="text-white text-sm sm:text-lg font-medium text-center">
                    {cert.title}
                  </p>
                  {cert.issuer && (
                    <p className="text-gray-400 text-xs sm:text-sm text-center">
                      {cert.issuer}
                    </p>
                  )}
                  {cert.description && (
                    <p className="text-gray-300 text-xs sm:text-sm text-center mt-1">
                      {cert.description}
                    </p>
                  )}
                  <p className="text-[#16f2b3] text-xs sm:text-sm mt-2">
                    {cert.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Certifications; 