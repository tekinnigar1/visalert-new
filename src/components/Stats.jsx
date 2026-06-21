function Stats() {
    return (<div className="bg-[#1c1917] text-white px-5 md:px-16 lg:px-[72px] py-14 md:py-[56px]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0" style={{ maxWidth: 1400, margin: '0 auto' }}>
              {[
                { val: '2,847+', label: 'Slots found\nthis month' },
                { val: '4.2m',   label: 'Average\nalert time' },
                { val: '98%',    label: 'Success rate\nwithin 2 weeks' },
                { val: '24/7',   label: 'Always on,\nnights & weekends' },
              ].map((s, i) => (
                <div key={i} className={`${i < 3 ? 'lg:pr-10 lg:border-r lg:border-white/10' : 'lg:pl-10'}`}>
                  <div className="font-serif text-[40px] md:text-[48px] leading-none mb-2 text-white">{s.val}</div>
                  <div className="text-[12px] text-white/45 leading-relaxed whitespace-pre-line">{s.label}</div>
                </div>
              ))}
            </div>
          </div>);
}

export default Stats;