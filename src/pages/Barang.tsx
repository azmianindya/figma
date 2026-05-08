import barang from "../assets/barang/barang.png"
import produk from "../assets/barang/produk.png"
import { CgProfile } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa6";


const Barang = () => {
  return (
    <div className="bg-blue-200 w-full h-screen p-2.5 flex flex-col gap-2">

        {/* atas */}
        <div className="flex flex-row justify-between items-center p-2 bg-white border-black">
            <div><img src={barang} className="w-50 h-15 rounded-xl"/></div>
            <div className="flex flex-row gap-2">
                <FaCartPlus size={60}/>
                <CgProfile size={60}/>
            </div>
        </div>
                
        {/* bawah */}
        <div className="flex flex-col w-full h-full bg-white">
        <div className="p-2 text-[40px] font-bold">Barang</div>
            <div className="flex flex-row gap-3 p-2.5">
                {/* 1 */}
                <div className="w-30 rounded-xl p-2 border border-black items-center">
                    <div className="flex flex-col justify-center items-center ">
                        <img src={produk} className="w-25 h-25 rounded-xl shadow-2xl"/>
                        <div className="text-[10px] p-2">Sepatu Sneaker Puma Suede XL Royal Blue White - 42.</div>
                        <button className="p-2 rounded-xl bg-blue-400">Lihat</button>
                    </div>
                </div>

                {/* 2 */}
                <div className="w-30 rounded-xl p-2 border border-black items-center">
                    <div className="flex flex-col justify-center items-center ">
                        <img src={produk} className="w-25 h-25 rounded-xl shadow-2xl"/>
                        <div className="text-[10px] p-2">Sepatu Sneaker Puma Suede XL Royal Blue White - 42.</div>
                        <button className="p-2 rounded-xl bg-blue-400">Lihat</button>
                    </div>
                </div>

                {/* 3 */}
                <div className="w-30 rounded-xl p-2 border border-black items-center">
                    <div className="flex flex-col justify-center items-center ">
                        <img src={produk} className="w-25 h-25 rounded-xl shadow-2xl"/>
                        <div className="text-[10px] p-2">Sepatu Sneaker Puma Suede XL Royal Blue White - 42.</div>
                        <button className="p-2 rounded-xl bg-blue-400">Lihat</button>
                    </div>
                </div>

            </div>

            <div className="flex flex-row gap-3 p-2.5">
                {/* 4 */}
                <div className="w-30 rounded-xl p-2 border border-black items-center">
                    <div className="flex flex-col justify-center items-center ">
                        <img src={produk} className="w-25 h-25 rounded-xl shadow-2xl"/>
                        <div className="text-[10px] p-2">Sepatu Sneaker Puma Suede XL Royal Blue White - 42.</div>
                        <button className="p-2 rounded-xl bg-blue-400">Lihat</button>
                    </div>
                </div>

                {/* 5 */}
                <div className="w-30 rounded-xl p-2 border border-black items-center">
                    <div className="flex flex-col justify-center items-center ">
                        <img src={produk} className="w-25 h-25 rounded-xl shadow-2xl"/>
                        <div className="text-[10px] p-2">Sepatu Sneaker Puma Suede XL Royal Blue White - 42.</div>
                        <button className="p-2 rounded-xl bg-blue-400">Lihat</button>
                    </div>
                </div>

                {/* 6 */}
                <div className="w-30 rounded-xl p-2 border border-black items-center">
                    <div className="flex flex-col justify-center items-center ">
                        <img src={produk} className="w-25 h-25 rounded-xl shadow-2xl"/>
                        <div className="text-[10px] p-2">Sepatu Sneaker Puma Suede XL Royal Blue White - 42.</div>
                        <button className="p-2 rounded-xl bg-blue-400">Lihat</button>
                    </div>
                </div>

            </div>

            <div className="flex flex-row gap-3 p-2.5">
                {/* 7 */}
                <div className="w-30 rounded-xl p-2 border border-black items-center">
                    <div className="flex flex-col justify-center items-center ">
                        <img src={produk} className="w-25 h-25 rounded-xl shadow-2xl"/>
                        <div className="text-[10px] p-2">Sepatu Sneaker Puma Suede XL Royal Blue White - 42.</div>
                        <button className="p-2 rounded-xl bg-blue-400">Lihat</button>
                    </div>
                </div>

                {/* 8 */}
                <div className="w-30 rounded-xl p-2 border border-black items-center">
                    <div className="flex flex-col justify-center items-center ">
                        <img src={produk} className="w-25 h-25 rounded-xl shadow-2xl"/>
                        <div className="text-[10px] p-2">Sepatu Sneaker Puma Suede XL Royal Blue White - 42.</div>
                        <button className="p-2 rounded-xl bg-blue-400">Lihat</button>
                    </div>
                </div>

                {/* 9 */}
                <div className="w-30 rounded-xl p-2 border border-black items-center">
                    <div className="flex flex-col justify-center items-center ">
                        <img src={produk} className="w-25 h-25 rounded-xl shadow-2xl"/>
                        <div className="text-[10px] p-2">Sepatu Sneaker Puma Suede XL Royal Blue White - 42.</div>
                        <button className="p-2 rounded-xl bg-blue-400">Lihat</button>
                    </div>
                </div>

            </div>
        </div>
        

    </div>
  )
}

export default Barang