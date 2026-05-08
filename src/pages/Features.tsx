import bgFeatures from '../assets/featuress/bg-features.png'
import mockupFeatures from '../assets/featuress/mockup-features.png'
import { VscCommentDiscussion } from "react-icons/vsc";
import { IoDiamondOutline } from "react-icons/io5";
import { BsCircleFill } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";

const Features = () => {
  return (
    <div className="bg-[#1E0E62] w-full h-full bg-cover bg-center pr-10 py-6"
     style={{ backgroundImage: `url(${bgFeatures})` }}>

      <div className="flex flex-row items-center justify-between w-full min-h-screen">

        {/* gambar */}
        <div>
          <img src={mockupFeatures} alt="mockup" />
        </div>

        {/* konten */}
        <div className="flex flex-col text-white w-200 gap-5">
          <div className="text-[52px] font-bold">We Create Something New</div>
          <div className="text-[32px]">We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</div>

          <div className="flex flex-row text-white gap-7.25 mt-16.5">

            <div className="flex flex-col w-150 gap-7.25">
              <VscCommentDiscussion size={37.6} />
              <div className="text-[26px]">30 NEW FEATURE PAGES</div>
              <div className="text-[26px]">Startup Framework contains components and complex blocks which can easily.</div>
            </div>

            <div className="flex flex-col w-150 gap-7.25">
              <IoDiamondOutline size={37.6}/>
              <div className="text-[26px]">USEFUL SYMBOL COMPONENTS</div>
              <div className="text-[26px]">Samples will show you the feeling on how to play around using the components.</div>
            </div>

          </div>
        </div>

        {/* circle */}
        <div className="flex flex-col gap-3 pr-28.75 text-white">
          <BsCircleFill />
          <BsCircle />
          <BsCircle />
          <BsCircle />
          <BsCircle />
        </div>

      </div>
    </div>
  )
}

export default Features