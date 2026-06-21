import visaImg from '../images/visa.png';

function How() {
    return (<section id="how" className="bg-white px-5 md:px-16 lg:px-[72px] py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center" style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="relative top-12 h-[500px] hidden lg:block">
            <div className="absolute top-0 left-0 right-20 bottom-20 rounded-[20px] overflow-hidden flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e293b 50%,#334155 100%)' }}>
              <div className="text-center text-white/20 select-none">
<img

    src={visaImg}

    alt="visa"

    className="absolute inset-0 w-full h-full object-cover opacity-100"

  />                
              </div>
            </div>
            
            <div className="absolute top-5 left-5 bg-white rounded-xl px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,.1)] z-10">
              <div className="font-serif text-[28px] text-blue-600 leading-none">60s</div>
              <div className="text-[11px] text-[#78716c] mt-1">to set up alert</div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 text-[11px] font-semibold tracking-widest uppercase text-blue-600 mb-5">
              <span className="w-6 h-[1.5px] bg-blue-600 block"></span>How it works
            </div>
            <h2 className="font-serif text-[38px] md:text-[46px] leading-[1.1] tracking-tight mb-5">
              We do the watching.<br />You do the <em className="text-blue-600" style={{ fontStyle: 'italic' }}>travelling.</em>
            </h2>
            <p className="text-[15px] leading-[1.8] text-[#78716c] font-light mb-10">
              Getting a Schengen appointment shouldn't feel like a second job. We were tired of refreshing consulate pages at 3 AM — now we do that so you don't have to.
            </p>
            <div className="flex flex-col gap-6">
              {[
                { n:1, title:"Tell us where you're going", desc:"Pick your city, destination, and visa type in under a minute." },
                { n:2, title:"We watch every few seconds",  desc:"Our system monitors 24/7 — nights, weekends, and holidays." },
                { n:3, title:"You get the slot",            desc:"Instant Telegram or email alert with a direct booking link." },
              ].map(s => (
                <div key={s.n} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-serif text-[14px] font-bold shrink-0">{s.n}</div>
                  <div><h4 className="font-semibold text-[15px] mb-1">{s.title}</h4><p className="text-[13px] text-[#78716c] leading-relaxed">{s.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
);
}

export default How;