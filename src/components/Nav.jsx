


function Nav() {
    return(  <nav style={{ background: '#f6f3eeee' }} className="fixed inset-x-0 top-0 z-50 h-16 flex items-center gap-6 backdrop-blur-xl border-b border-[#e7e2d9] px-5 md:px-16 lg:px-[72px]">
        <a href="#" className="font-serif text-[20px] text-[#1c1917] mr-auto no-underline">
          visa<span className="text-blue-600">alert</span>
        </a>
        <a href="#how" className="hidden md:block text-[13px] font-medium text-[#78716c] hover:text-[#1c1917] no-underline transition-colors">How it works</a>
        <a href="#pricing" className="hidden md:block text-[13px] font-medium text-[#78716c] hover:text-[#1c1917] no-underline transition-colors">Pricing</a>
        <div className="hidden sm:flex items-center gap-2 bg-green-50 text-green-700 text-[11px] font-semibold px-3 py-[5px] rounded-full">
          <span className="w-[5px] h-[5px] rounded-full bg-green-600 animate-blink block"></span>
          Live
        </div>
        <a href="#pricing" className="bg-blue-600 text-white text-[13px] font-semibold px-4 py-[9px] md:px-6 rounded-xl no-underline hover:bg-blue-700 transition-all">
          Get notified →
        </a>
      </nav>);
}
export default Nav;