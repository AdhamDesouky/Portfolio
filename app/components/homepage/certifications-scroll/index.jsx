// @flow strict

import { certifications } from "@/utils/data/certifications";
import Image from "next/image";
import { FaAward, FaCertificate, FaMedal, FaTrophy, FaCertificate as FaCert } from "react-icons/fa";
import { GiTrophyCup, GiMedal, GiDiploma } from "react-icons/gi";
import { MdEmojiEvents } from "react-icons/md";
import Marquee from "react-fast-marquee";

function CertificationsScroll() {
  // Function to get the appropriate icon based on certification type and title
  const getCertificationIcon = (cert) => {
    if (cert.type === "award") {
      // For awards, use different icons based on the title
      if (cert.title.includes("1st Place") || cert.title.includes("Finalist")) {
        return <GiTrophyCup size={52} className="text-amber-400" />;
      } else if (cert.title.includes("2nd Place")) {
        return <GiTrophyCup size={52} className="text-slate-300" />;
      } else if (cert.title.includes("3rd Place")) {
        return <GiTrophyCup size={52} className="text-amber-700" />;
      } else {
        return <MdEmojiEvents size={52} className="text-amber-400" />;
      }
    } else {
      // For certifications
      return <GiDiploma size={52} className="text-violet-500" />;
    }
  };

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
              className="w-72 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-4 sm:m-6 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={cert.id}
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-8">
                  <div className="h-16 sm:h-18 transition-all duration-300 group-hover:scale-125 flex items-center justify-center">
                    {getCertificationIcon(cert)}
                  </div>
                  <div className="text-center">
                    <p className="text-white text-base sm:text-xl font-medium mb-2">
                      {cert.title}
                    </p>
                    {cert.issuer && (
                      <p className="text-gray-400 text-sm sm:text-base mb-2">
                        {cert.issuer}
                      </p>
                    )}
                    {cert.description && (
                      <p className="text-gray-300 text-sm sm:text-base mb-3">
                        {cert.description}
                      </p>
                    )}
                    <p className="text-[#16f2b3] text-sm sm:text-base font-medium">
                      {cert.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default CertificationsScroll; 