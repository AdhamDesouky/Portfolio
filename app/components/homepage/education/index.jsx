// @flow strict
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaGraduationCap, FaUniversity, FaAward } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";
import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Education() {
  // Function to get the appropriate icon based on education details
  const getEducationIcon = (education) => {
    if (education.title.toLowerCase().includes("bachelor") || education.title.toLowerCase().includes("bsc")) {
      return <FaGraduationCap size={42} className="text-violet-500" />;
    } else if (education.title.toLowerCase().includes("master") || education.title.toLowerCase().includes("msc")) {
      return <GiDiploma size={42} className="text-violet-500" />;
    } else if (education.title.toLowerCase().includes("phd") || education.title.toLowerCase().includes("doctorate")) {
      return <FaUniversity size={42} className="text-violet-500" />;
    } else {
      return <BsPersonWorkspace size={42} className="text-violet-500" />;
    }
  };

  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>
      
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Education
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {educations.map(education => (
                <GlowCard key={education.id} identifier={`education-${education.id}`}>
                  <div className="p-4 relative text-white">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-center mb-2">
                      <p className="text-sm sm:text-base text-[#16f2b3] font-medium">
                        {education.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-6 px-4 py-4">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125 flex items-center justify-center">
                        {getEducationIcon(education)}
                      </div>
                      <div>
                        <p className="text-lg sm:text-xl mb-2 font-medium uppercase tracking-wide">
                          {education.title}
                        </p>
                        <p className="text-base sm:text-lg text-gray-300">{education.institution}</p>
                      </div>
                    </div>
                    <div className="px-4 pb-4">
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {education.description}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;