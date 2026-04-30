import bgPricing from '../assets/bg-pricing.png'
import { Check } from 'lucide-react';

const Pricingtable = () => {
  return (
    <div
      className="bg-[#1E0E62] w-full min-h-screen bg-cover bg-center px-10 py-6"
      style={{ backgroundImage: `url(${bgPricing})` }}
    >
      {/* judul */}
      <div className="max-w-4xl mx-auto text-center mt-15 mb-10 flex flex-col items-center gap-7.5">

        <div className="text-white text-[32px] font-bold">
          Plans & Pricing
        </div>

        <div className="text-white text-[14px] opacity-80 text-center mx-auto">
          <div>Startup Framework is free forever — you only pay for</div>
          <div>custom domain hosting or to export your site.</div>
        </div>

      </div>

      {/* cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-3.75">

        {/* Starter */}
        <div className="border border-white/30 rounded-xl p-6 text-white flex flex-col">
          <div className="text-sm mb-5.75">Starter</div>

          <div className="text-[48px] font-bold mb-10">
            9.99<span className="text-[12px] align-top ml-1">$</span>
          </div>

          <div className="space-y-2 text-[12px] mb-6 flex-1">
            <div className="flex items-center gap-2"><Check size={13} className="text-green-500 shrink-0" />2 GB of space</div>
            <div className="flex items-center gap-2"><Check size={13} className="text-green-500 shrink-0" />14 days of backups</div>
            <div className="flex items-center gap-2"><Check size={13} className="text-green-500 shrink-0" />Social integrations</div>
            <div className="flex items-center gap-2"><Check size={13} className="text-green-500 shrink-0" />Client billing</div>
            <div className="opacity-40 pl-5">Remote access</div>
            <div className="opacity-40 pl-5">Custom domain</div>
            <div className="opacity-40 pl-5">24 hours support</div>
            <div className="opacity-40 pl-5">Admin tools</div>
            <div className="opacity-40 pl-5">Collaboration tools</div>
            <div className="opacity-40 pl-5">User management</div>
          </div>

          <button className="w-57.5 h-15 border border-white/40 rounded-full text-sm mx-auto mt-6">
            Get Started
          </button>
        </div>

        {/* Professional */}
        <div className="border border-white/30 rounded-xl p-6 text-white flex flex-col">
          <div className="text-sm mb-5.70">Professional</div>

          <div className="text-[48px] font-bold mb-10">
            19.99<span className="text-[12px] align-top ml-1">$</span>
          </div>

          <div className="space-y-2 text-[12px] mb-6 flex-1">
            <div className="flex items-center gap-2"><Check size={13} className="text-green-500 shrink-0" />2 GB of space</div>
            <div className="flex items-center gap-2"><Check size={13} className="text-green-500 shrink-0" />14 days of backups</div>
            <div className="flex items-center gap-2"><Check size={13} className="text-green-500 shrink-0" />Social integrations</div>
            <div className="flex items-center gap-2"><Check size={13} className="text-green-500 shrink-0" />Client billing</div>
            <div className="flex items-center gap-2"><Check size={13} className="text-green-500 shrink-0" />Remote access</div>
            <div className="flex items-center gap-2"><Check size={13} className="text-green-500 shrink-0" />Custom domain</div>
            <div className="flex items-center gap-2"><Check size={13} className="text-green-500 shrink-0" />24 hours support</div>
            <div className="opacity-40 pl-5">Admin tools</div>
            <div className="opacity-40 pl-5">Collaboration tools</div>
            <div className="opacity-40 pl-5">User management</div>
          </div>

          <button className="w-57.5 h-15 bg-pink-500 rounded-full text-sm mx-auto mt-6">
            Get Started
          </button>
        </div>

        {/* Team */}
        <div className="border border-white/30 rounded-xl p-6 text-white flex flex-col">
          <div className="text-sm mb-5.75">Team</div>

          <div className="text-[48px] font-bold mb-10">
            49.99<span className="text-[12px] align-top ml-1">$</span>
          </div>

          <div className="space-y-2 text-[12px] mb-6 flex-1">
            <div className="flex items-center gap-2"><Check size={13} className="text-green-500 shrink-0" />2 GB of space</div>
            <div className="flex items-center gap-2"><Check size={13} className="text-green-500 shrink-0" />14 days of backups</div>
            <div className="flex items-center gap-2"><Check size={13} className="text-green-500 shrink-0" />Social integrations</div>
            <div className="flex items-center gap-2"><Check size={13} className="text-green-500 shrink-0" />Client billing</div>
            <div className="flex items-center gap-2"><Check size={13} className="text-green-500 shrink-0" />Remote access</div>
            <div className="flex items-center gap-2"><Check size={13} className="text-green-500 shrink-0" />Custom domain</div>
            <div className="flex items-center gap-2"><Check size={13} className="text-green-500 shrink-0" />24 hours support</div>
            <div className="flex items-center gap-2"><Check size={13} className="text-green-500 shrink-0" />Admin tools</div>
            <div className="flex items-center gap-2"><Check size={13} className="text-green-500 shrink-0" />Collaboration tools</div>
            <div className="flex items-center gap-2"><Check size={13} className="text-green-500 shrink-0" />User management</div>
          </div>

          <button className="w-57.5 h-15 border border-white/40 rounded-full text-sm mx-auto mt-6">
            Get Started
          </button>
        </div>

      </div>
    </div>
  )
}

export default Pricingtable