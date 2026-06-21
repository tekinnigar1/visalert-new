import { useState } from "react";
import Telegram from "./Telegram";
import travelImg from '../images/travel.png';

function Hero() {
    const [originCountry, setOriginCountry] = useState('')
  const [originBranch, setOriginBranch] = useState('')
const branches = {
  tr: ['🏙 Istanbul — VFS Global', '🏛 Ankara — VFS Global', '🌊 Izmir — VFS Global', '🍊 Antalya — VFS Global'],
  az: ['🏙 Baku — VFS Global'],
  ge: ['🏔 Tbilisi — VFS Global'],
}
  const handleCountryChange = (e) => {
    setOriginCountry(e.target.value)
    setOriginBranch('')}

    return (<section className="pt-16 min-h-screen px-5 md:px-16 lg:px-[72px]" style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[calc(100vh-64px)]">

          {/* Text */}
          <div className="py-10 lg:py-20 lg:pr-16 animate-fadeup">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-[11px] font-semibold px-4 py-[6px] rounded-full mb-7">
              <span className="w-[5px] h-[5px] rounded-full bg-blue-600 block"></span>
              Schengen slot intelligence · Istanbul
            </div>
            <h1 className="font-serif text-[44px] md:text-[58px] lg:text-[68px] leading-[1.0] tracking-tight mb-5">
              Stop refreshing.<br />
              <em className="text-blue-600" style={{ fontStyle: 'italic' }}>Start travelling.</em>
            </h1>
            <p className="text-[16px] leading-[1.75] text-[#78716c] font-light max-w-[430px] mb-3">
              We watch Schengen consulates 24/7 and alert you the moment a slot opens — so you book before anyone else even sees it.
            </p>

            {/* Form Card */}
            <div className="bg-white border border-[#e7e2d9] rounded-2xl p-5 md:p-7 shadow-[0_4px_24px_rgba(0,0,0,.07)] relative">
              <div className="text-[10px] font-semibold tracking-widest uppercase text-[#78716c]/60 mb-4">Where are you headed?</div>

              <div className="text-[10px] font-semibold text-[#78716c] uppercase tracking-wider mb-2">Origin</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <select value={originCountry} onChange={handleCountryChange}
                  className="bg-[#f6f3ee] border border-[#e7e2d9] rounded-xl px-4 py-[12px] text-[14px] text-[#1c1917] outline-none cursor-pointer focus:border-blue-600 transition-colors">
                  <option value="">Select country</option>
                  <option value="tr">🇹🇷 Turkey</option>
                  <option value="az">🇦🇿 Azerbaijan</option>
                  <option value="ge">🇬🇪 Georgia</option>
                </select>
                <select value={originBranch} onChange={e => setOriginBranch(e.target.value)}
                  className="bg-[#f6f3ee] border border-[#e7e2d9] rounded-xl px-4 py-[12px] text-[14px] text-[#1c1917] outline-none cursor-pointer focus:border-blue-600 transition-colors">
                  <option value="">Select branch</option>
                  {(branches[originCountry] || []).map(b => <option key={b}>{b}</option>)}
                </select>
              </div>

              <div className="text-[10px] font-semibold text-[#78716c] uppercase tracking-wider mb-2">Destination</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <select className="bg-[#f6f3ee] border border-[#e7e2d9] rounded-xl px-4 py-[12px] text-[14px] outline-none cursor-pointer">
                  <option value="">Select country</option>
                  {['🇳🇱 Netherlands','🇩🇪 Germany','🇫🇷 France','🇮🇹 Italy','🇪🇸 Spain','🇦🇹 Austria','🇧🇪 Belgium','🇨🇭 Switzerland','🇸🇪 Sweden','🇳🇴 Norway'].map(c => <option key={c}>{c}</option>)}
                </select>
                <select className="bg-[#f6f3ee] border border-[#e7e2d9] rounded-xl px-4 py-[12px] text-[14px] outline-none cursor-pointer">
                  <option value="">Visa type</option>
                  {['Tourist','Business','Student','Family reunion'].map(t => <option key={t}>{t}</option>)}
                </select>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[15px] py-[14px] rounded-xl transition-all">
                Alert me when a slot opens →
              </button>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-[11px] text-[#78716c]">
                <span><span className="text-green-600 font-bold">✓</span> No auto-renewal</span>
                <span><span className="text-green-600 font-bold">✓</span> Cancel anytime</span>
                <span><span className="text-green-600 font-bold">✓</span> Active in 60 sec</span>
              </div>

            <Telegram />
            </div>
          </div>

          {/* Visual Panel */}
          <div className="relative h-[600px] hidden lg:block top-5">
            <div className="absolute top-6 right-6 z-20 bg-white rounded-[14px] px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,.13)] w-[220px] animate-float-a">
              <div className="flex items-center gap-[5px] text-green-600 text-[9px] font-bold tracking-widest uppercase mb-2">
                <span className="w-[5px] h-[5px] rounded-full bg-green-600 block"></span>Slot just opened
              </div>
              <div className="font-semibold text-[14px] mb-1">🇳🇱 Netherlands — VFS</div>
              <div className="text-[11px] text-[#78716c]">June 18 · Amsterdam · 1 slot</div>
            </div>
            <div className="absolute bottom-[90px] left-4 z-20 bg-white rounded-[14px] px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,.13)] animate-float-b">
              <div className="font-serif text-[32px] text-blue-600 leading-none mb-1">4.2<span className="text-[14px]">m</span></div>
              <div className="text-[11px] text-[#78716c]">Avg. alert time</div>
            </div>
            <div className="absolute inset-0 rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg,#0f2952 0%,#1a3a6b 50%,#1e4d8c 100%)' }}>
             <img

    src={travelImg}

    alt="Refresh"

    className="absolute inset-0 w-full h-full object-cover opacity-100"

  />
             
              {/* <svg viewBox="0 0 500 600" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                  <linearGradient id="hsky" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0a1e3d"/>
                    <stop offset="100%" stopColor="#1e4d8c"/>
                  </linearGradient>
                </defs>
                <rect width="500" height="600" fill="url(#hsky)"/>
                <circle cx="60" cy="50" r="1.5" fill="white" opacity="0.7"/><circle cx="140" cy="30" r="1" fill="white" opacity="0.5"/><circle cx="240" cy="22" r="1.8" fill="white" opacity="0.8"/><circle cx="330" cy="45" r="1.2" fill="white" opacity="0.6"/><circle cx="420" cy="25" r="1.5" fill="white" opacity="0.7"/>
                <circle cx="420" cy="80" r="38" fill="#ffe066" opacity="0.12"/><circle cx="420" cy="80" r="26" fill="#ffe066" opacity="0.18"/><circle cx="420" cy="80" r="16" fill="#ffe066" opacity="0.3"/>
                <rect x="0" y="330" width="500" height="270" fill="#0a1830"/>
                <rect x="20" y="300" width="25" height="40" fill="#0d2248"/><rect x="55" y="285" width="18" height="55" fill="#0d2248"/><rect x="80" y="305" width="28" height="35" fill="#0d2248"/><rect x="115" y="275" width="20" height="65" fill="#0d2248"/><rect x="142" y="295" width="30" height="45" fill="#0d2248"/><rect x="180" y="310" width="22" height="30" fill="#0d2248"/><rect x="210" y="280" width="18" height="60" fill="#0d2248"/><rect x="235" y="300" width="26" height="40" fill="#0d2248"/><rect x="270" y="270" width="22" height="70" fill="#0d2248"/><rect x="300" y="290" width="30" height="50" fill="#0d2248"/><rect x="340" y="305" width="20" height="35" fill="#0d2248"/><rect x="368" y="278" width="25" height="62" fill="#0d2248"/><rect x="400" y="295" width="32" height="45" fill="#0d2248"/><rect x="440" y="308" width="22" height="32" fill="#0d2248"/><rect x="468" y="285" width="32" height="55" fill="#0d2248"/>
                <rect x="58" y="292" width="4" height="4" fill="#ffe066" opacity="0.4"/><rect x="118" y="282" width="4" height="4" fill="#ffe066" opacity="0.5"/><rect x="213" y="288" width="4" height="4" fill="#ffe066" opacity="0.4"/><rect x="274" y="278" width="4" height="4" fill="#ffe066" opacity="0.5"/>
                <rect x="0" y="430" width="500" height="170" fill="#0a1525"/>
                <ellipse cx="290" cy="430" rx="28" ry="5" fill="black" opacity="0.2"/>
                <rect x="305" y="385" width="28" height="36" rx="4" fill="#2563eb" opacity="0.95"/><rect x="310" y="381" width="18" height="7" rx="3" fill="#1d4ed8"/><rect x="303" y="418" width="7" height="14" rx="2" fill="#1e3a8a"/><rect x="323" y="418" width="7" height="14" rx="2" fill="#1e3a8a"/>
                <line x1="304" y1="397" x2="292" y2="397" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round"/>
                <rect x="268" y="368" width="20" height="38" rx="6" fill="#e2e8f0"/><rect x="268" y="368" width="9" height="38" rx="6" fill="#cbd5e1"/>
                <circle cx="278" cy="356" r="13" fill="#fbbf24"/><ellipse cx="278" cy="345" rx="13" ry="7" fill="#92400e"/>
                <rect x="258" y="370" width="14" height="28" rx="5" fill="#1d4ed8"/><rect x="261" y="375" width="8" height="18" rx="2" fill="#2563eb"/>
                <rect x="268" y="404" width="9" height="28" rx="4" fill="#334155"/><rect x="280" y="404" width="9" height="25" rx="4" fill="#334155"/>
                <line x1="288" y1="378" x2="303" y2="397" stroke="#e2e8f0" strokeWidth="5" strokeLinecap="round"/>
              </svg> */}
            </div>
          </div>
        </div>
      </section>);
}

export default Hero;