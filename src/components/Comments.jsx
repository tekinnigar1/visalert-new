import testimonials from "./testimonials.js";

function Comments() {
    return (<div>
        <section className="px-5 md:px-16 lg:px-[72px] py-16 md:py-24" style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div className="flex items-center gap-3 text-[11px] font-semibold tracking-widest uppercase text-blue-600 mb-4">
          <span className="w-6 h-[1.5px] bg-blue-600 block"></span>What people say
        </div>
        <h2 className="font-serif text-[38px] md:text-[48px] leading-[1.05] tracking-tight mb-10 md:mb-14">
          Real people.<br /><em className="text-blue-600" style={{ fontStyle: 'italic' }}>Real slots.</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <div className="bg-blue-600 rounded-2xl p-7 md:p-9 flex flex-col lg:row-span-2">
            <div className="text-[12px] tracking-[3px] text-yellow-300 mb-5">★★★★★</div>
            <div className="w-16 h-16 rounded-full mb-6 border-[3px] border-white/30 avatar-sara flex items-center justify-center text-white text-2xl font-bold">S</div>
            <p className="font-serif text-[16px] md:text-[18px] text-white/95 leading-[1.75] mb-8 flex-1" style={{ fontStyle: 'italic' }}>
              "I had been checking the Dutch consulate every morning for three weeks. Visalert sent me an alert at 7 AM and I was booked by 7:03. I genuinely don't know what I'd have done without it."
            </p>
            <div>
              <div className="font-semibold text-white text-[14px]">Sara K.</div>
              <div className="text-[12px] text-white/60 mt-1">Istanbul → Netherlands ✓</div>
            </div>
          </div>
          {testimonials.map(t => (
            <div key={t.name} className="bg-white border border-[#e7e2d9] rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition-transform">
              <div className="text-[11px] tracking-[3px] text-yellow-400 mb-4">★★★★★</div>
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-12 h-12 rounded-full ${t.cls} flex items-center justify-center text-white text-lg font-bold shrink-0`}>{t.initial}</div>
                <div><div className="font-semibold text-[14px]">{t.name}</div><div className="text-[12px] text-[#78716c]">{t.route}</div></div>
              </div>
              <p className="font-serif text-[15px] leading-[1.7] text-[#1c1917]" style={{ fontStyle: 'italic' }}>{t.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>);
}

export default Comments;