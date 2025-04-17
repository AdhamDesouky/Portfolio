// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-6 lg:my-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md mx-4">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            {experiences.slice(0, Math.ceil(experiences.length / 2)).map((exp) => (
              <GlowCard key={exp.id} identifier={`experience-${exp.id}`}>
                <div className="p-3 sm:p-4 relative">
                  <Image
                    src="/blur-23.svg"
                    alt="Hero"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80"
                  />
                  <div className="flex justify-center mb-2">
                    <p className="text-xs sm:text-sm text-[#16f2b3] font-medium">
                      {exp.duration}
                    </p>
                  </div>
                  <div className="flex items-start gap-x-4 px-3 py-3">
                    <div className="text-violet-500 transition-all duration-300 hover:scale-125 mt-1">
                      <BsPersonWorkspace size={32} />
                    </div>
                    <div className="flex-1">
                      <p className="text-base sm:text-lg mb-1 font-semibold uppercase text-white">
                        {exp.title}
                      </p>
                      <p className="text-sm sm:text-base text-gray-300 mb-2">
                        {exp.company}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>

          <div className="w-full lg:w-auto flex justify-center items-center">
            <div className="w-full max-w-xs">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            {experiences.slice(Math.ceil(experiences.length / 2)).map((exp) => (
              <GlowCard key={exp.id} identifier={`experience-${exp.id}`}>
                <div className="p-3 sm:p-4 relative">
                  <Image
                    src="/blur-23.svg"
                    alt="Hero"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80"
                  />
                  <div className="flex justify-center mb-2">
                    <p className="text-xs sm:text-sm text-[#16f2b3] font-medium">
                      {exp.duration}
                    </p>
                  </div>
                  <div className="flex items-start gap-x-4 px-3 py-3">
                    <div className="text-violet-500 transition-all duration-300 hover:scale-125 mt-1">
                      <BsPersonWorkspace size={32} />
                    </div>
                    <div className="flex-1">
                      <p className="text-base sm:text-lg mb-1 font-semibold uppercase text-white">
                        {exp.title}
                      </p>
                      <p className="text-sm sm:text-base text-gray-300 mb-2">
                        {exp.company}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;