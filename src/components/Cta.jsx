import refreshImg from "../images/refresh.png";

function Cta() {

    return (<div className="mx-5 md:mx-16 lg:mx-[72px] mb-20 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
        <div className="bg-[#1c1917] px-8 md:px-16 py-14 md:py-20 flex flex-col justify-center">
          <h2 className="font-serif text-[38px] md:text-[48px] text-white leading-[1.05] tracking-tight mb-4">
            Ready to stop<br /><em className="text-blue-300" style={{ fontStyle: 'italic' }}>refreshing?</em>
          </h2>
          <p className="text-[15px] text-white/50 leading-[1.75] font-light mb-8">Set up in under a minute. We'll watch so you can plan your trip.</p>
          <a href="#" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl text-[15px] font-semibold no-underline transition-all hover:-translate-y-px w-fit">
            Start monitoring now →
          </a>
        </div>
        <div className="relative overflow-hidden min-h-[240px] flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg,#0369a1 0%,#0ea5e9 50%,#38bdf8 100%)' }}>
     <img
  src={refreshImg}
  alt="Refresh"
  className="absolute inset-0 w-full h-full object-cover opacity-100"
/>
        </div>
      </div>);
       
}

export default Cta;