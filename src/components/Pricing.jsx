

function Pricing() {
    return (<section id="pricing" className="px-5 md:px-16 lg:px-[72px] py-16 md:py-24">
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="flex items-center gap-3 text-[11px] font-semibold tracking-widest uppercase text-blue-600 mb-4">
            <span className="w-6 h-[1.5px] bg-blue-600 block"></span>Pricing
          </div>
          <h2 className="font-serif text-[38px] md:text-[48px] leading-[1.05] tracking-tight mb-10 md:mb-14">
            Simple pricing.<br /><em className="text-blue-600" style={{ fontStyle: 'italic' }}>No surprises.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name:'Essentials', price:'500', sub:'per month · 1 traveller', features:['Daily slot digest','Email alerts','1 destination'], missing:['Instant alerts','Telegram'], highlight:false },
              { name:'Notifications', price:'1,000', sub:'per month · whole family', features:['Daily slot digest','Email alerts','All destinations','Instant real-time alerts','Telegram + Email'], missing:[], highlight:true },
              { name:'Priority', price:'2,500', sub:'per month · unlimited', features:['First-to-know alerts','WhatsApp + Telegram','All destinations','Dedicated slot hunter','Unlimited travellers'], missing:[], highlight:false },
            ].map(p => (
              <div key={p.name} className={`relative rounded-2xl p-8 md:p-10 transition-all hover:-translate-y-1 ${
                p.highlight
                  ? 'bg-[#1c1917] text-white border border-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,.15)] hover:shadow-[0_16px_48px_rgba(0,0,0,.2)]'
                  : 'bg-[#f6f3ee] border border-[#e7e2d9] hover:shadow-[0_16px_48px_rgba(0,0,0,.07)]'
              }`}>
                {p.highlight && <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-5 py-[5px] rounded-full tracking-wider whitespace-nowrap">Most popular</div>}
                <div className={`text-[10px] font-bold tracking-widest uppercase mb-5 ${p.highlight ? 'text-white/40' : 'text-[#78716c]'}`}>{p.name}</div>
                <div className="font-serif text-[46px] leading-none mb-1"><span className="text-[20px]">₺</span>{p.price}</div>
                <div className={`text-[13px] mb-8 ${p.highlight ? 'text-white/40' : 'text-[#78716c]'}`}>{p.sub}</div>
                <hr className={`mb-6 ${p.highlight ? 'border-white/10' : 'border-[#e7e2d9]'}`} />
                <ul className="mb-8">
                  {p.features.map(f => <li key={f} className={`flex items-center gap-3 text-[14px] py-[9px] border-b ${p.highlight ? 'border-white/[.07] text-white/75' : 'border-black/5'}`}><span className="text-green-500 font-bold">✓</span>{f}</li>)}
                  {p.missing.map(f => <li key={f} className={`flex items-center gap-3 text-[14px] py-[9px] border-b border-black/5 ${p.highlight ? 'text-white/30' : 'text-[#78716c]'}`}><span className="text-[#e7e2d9]">—</span>{f}</li>)}
                </ul>
                <button className={`w-full rounded-xl py-[13px] text-[14px] font-semibold transition-all ${
                  p.highlight ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border border-[#1c1917] hover:bg-[#1c1917] hover:text-white'
                }`}>{p.highlight ? 'Get notified →' : 'Get started'}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
);
}

export default Pricing;