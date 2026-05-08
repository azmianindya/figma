import Userpic1 from '../assets/testi/Userpic1.png'
import Userpic2 from '../assets/testi/Userpic2.png'
import Userpic3 from '../assets/testi/Userpic3.png'
import Userpic4 from '../assets/testi/Userpic4.png'

const testimonial = () => {
    return (
        <div className="bg-[#1E0E62] w-full h-screen pt-25 pl-53.75">
            <div className="text-4xl font-bold text-white mb-10">Our Happy Client</div>
            <div className="grid grid-cols-2 gap-7.5 items-stretch pr-53.75">

                {/* kartu 1 */}
                <div className="border border-white rounded-xl p-6 flex flex-row gap-4 h-full">
                    <div>
                        <img src={Userpic1} className="w-16 h-16 rounded-md shrink-0" />
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="text-white text-sm max-w-xs">Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support</div>
                        <div className="text-gray-400 font-bold text-xs tracking-widest">RAYHAN CURRAN</div>
                    </div>
                </div>

                {/* kartu 2 */}
                <div className="border border-white rounded-xl p-6 flex flex-row gap-4 h-full">
                    <div>
                        <img src={Userpic2} className="w-16 h-16 rounded-md shrink-0" />
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="text-white text-sm max-w-xs">As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website</div>
                        <div className="text-gray-400 font-bold text-xs tracking-widest pt-4">KAYLEY FRAME</div>
                    </div>
                </div>

                {/* kartu 3 */}
                <div className="border border-white rounded-xl p-6 flex flex-row gap-4 h-full">
                    <div>
                        <img src={Userpic3} className="w-16 h-16 rounded-md shrink-0" />
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="text-white text-sm max-w-xs">The most important part of the Startup Framework is the samples</div>
                        <div className="text-gray-400 font-bold text-xs tracking-widest pt-4">GENE WHITFIELD</div>
                    </div>
                </div>

                {/* kartu 4 */}
                <div className="border border-white rounded-xl p-6 flex flex-row gap-4 h-full">
                    <div>
                        <img src={Userpic4} className="w-16 h-16 rounded-md shrink-0" />
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="text-white text-sm max-w-xs">I've built my website with Startup just in one day, and it was ready-to-go.</div>
                        <div className="text-gray-400 font-bold text-xs tracking-widest pt-4">ALLAN KIM</div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default testimonial