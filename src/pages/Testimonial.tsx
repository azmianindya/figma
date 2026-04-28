import Userpic1 from '../assets/Userpic1.png'
import Userpic2 from '../assets/Userpic2.png'
import Userpic3 from '../assets/Userpic3.png'
import Userpic4 from '../assets/Userpic4.png'

const testimonial = () => {
    return (
    <div className="bg-[#1E0E62] w-full h-screen py-16 px-20">
        
            {/* judul */}
            <div className="text-4xl font-bold text-white mb-10">Our Happy Client</div>

        {/* grid kartu */}
        <div className="grid grid-cols-2 gap-7.5 px-20">

            {/* kartu 1 */}
            <div className="border border-white rounded-xl p-6 flex flex-col gap-6">
                <div className="flex flex-row gap-4">
                    <img src={Userpic1} className="w-16 h-16 rounded-md shrink-0"></img>
                    <div className="text-white text-sm max-w-xs">Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support</div>
                </div>
                    <div className="text-gray-400 font-bold text-xs tracking-widest">RAYHAN CURRAN</div>
            </div>

            {/* kartu 2 */}
            <div className="border border-white rounded-xl p-6 flex flex-col gap-6">
                <div className="flex flex-row gap-4">
                    <img src={Userpic2} className="w-16 h-16 rounded-md shrink-0"></img>
                    <div className="text-white text-sm max-w-xs">As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website</div>
                </div>
                    <div className="text-gray-400 font-bold text-xs tracking-widest">KAYLEY FRAME</div>
            </div>

            {/* kartu 3 */}
            <div className="border border-white rounded-xl p-6 flex flex-col gap-6">
                <div className="flex flex-row gap-4">
                    <img src={Userpic3} className="w-16 h-16 rounded-md shrink-0"></img>
                    <div className="text-white text-sm max-w-xs">The most important part of the Startup Framework is the samples</div>
                </div>
                    <div className="text-gray-400 font-bold text-xs tracking-widest">GENE WHITFIELD</div>
            </div>

            {/* kartu 4 */}
            <div className="border border-white rounded-xl p-6 flex flex-col gap-6">
                <div className="flex flex-row gap-4">
                    <img src={Userpic4} className="w-16 h-16 rounded-md shrink-0"></img>
                    <div className="text-white text-sm max-w-xs">I’ve built my website with Startup just in one day, and it was ready-to-go. </div>
                </div>
                    <div className="text-gray-400 font-bold text-xs tracking-widest">ALLAN KIM</div>
            </div>
            
        </div>

    </div>
    )
}

export default testimonial