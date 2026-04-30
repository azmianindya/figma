import Team1 from '../assets/Team1.png'
import Team2 from '../assets/Team2.png'
import Team3 from '../assets/Team3.png'
import Team4 from '../assets/Team4.png'
import Team5 from '../assets/Team5.png'
import { FaTwitter } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { FaDribbble } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { BiLogoMediumOld } from "react-icons/bi";
import { FaGit } from "react-icons/fa6";


const Team = () => {
  return (
    <div className="bg-[#1E0E62] w-full h-full py-25 pl-53.75">
       <div className="flex flex-col gap-17.5">
             {/* judul + desk */}
            <div className="flex flex-col text-white w-188.5 gap-7.75">
                <div className="text-[42px] font-bold">Startup Crew</div>
                <div className="text-[22px] ">The most important part of the Startup Framework is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks from UI Kit.</div>
            </div>
        
            {/* card */}

            <div className="flex flex-row gap-36.5">
                {/* orang-1  */}
                <div className="flex flex-col text-white gap-6 w-38.5">
                    <div><img src={Team1} className="w-25 h-25 rounded-full shrink-0" /></div>
                    <div className="flex flex-col gap-2">
                        <div className="text-[22px]">Leah Salomon</div>
                        <div className="text-[16px] ">UI Designer</div>
                        <div className="flex flex-row gap-7.5">
                            <div><FaTwitter/></div>
                            <div><AiFillFacebook/></div>
                            <div><FaDribbble/></div>
                            <div><FaInstagram/></div>
                        </div>
                    </div>
                </div>

                {/* orang-2 */}
                <div className="flex flex-col text-white gap-6">
                    <div><img src={Team2} className="w-25 h-25 rounded-full shrink-0" /></div>
                    <div className="flex flex-col gap-2">
                        <div className="text-[22px]">Colin Timmons</div>
                        <div className="text-[16px] ">UX Designer</div>
                        <div className="flex flex-row gap-7.5">
                            <div><FaTwitter/></div>
                            <div><FaDribbble/></div>
                        </div>
                    </div>
                </div>

                {/* orang-3 */}
                <div className="flex flex-col text-white gap-6">
                    <div><img src={Team3} className="w-25 h-25 rounded-full shrink-0" /></div>
                    <div className="flex flex-col gap-2">
                        <div className="text-[22px]">Miguel Osborne</div>
                        <div className="text-[16px] ">Front-end Developer</div>
                        <div className="flex flex-row gap-7.5">
                            <div><FaSkype/></div>
                            <div><BiLogoMediumOld/></div>
                            <div><FaGit/></div>
                        </div>
                    </div>
                </div>
                </div>
                
                <div className="flex flex-row gap-36.5">
                {/* orang-4 */}
                <div className="flex flex-col text-white gap-6 w-38.5">
                    <div><img src={Team4} className="w-25 h-25 rounded-full shrink-0" /></div>
                    <div className="flex flex-col gap-2">
                        <div className="text-[22px]">Taylor Simon</div>
                        <div className="text-[16px] ">Product Manager</div>
                        <div className="flex flex-row gap-7.5">
                            <div><FaTwitter/></div>
                            <div><FaInstagram/></div>
                        </div>
                    </div>
                </div>
                 
                {/* orang-5 */}
                <div className="flex flex-col text-white gap-6">
                    <div><img src={Team5} className="w-25 h-25 rounded-full shrink-0" /></div>
                    <div className="flex flex-col gap-2">
                        <div className="text-[22px]">Steven MacAlistern</div>
                        <div className="text-[16px] ">Copyrighter</div>
                        <div className="flex flex-row gap-7.5">
                            <div><FaTwitter/></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Team