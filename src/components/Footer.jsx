function Footer() {

    const today = new Date();
const currentYear = today.getFullYear();

 return (
 <div>
 <footer className="bg-[#1c1917] text-white/40 px-5 md:px-16 lg:px-[72px] py-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="font-serif text-[20px] text-white">visa<span className="text-blue-500">alert</span></div>
        <div className="text-[12px]">© {currentYear} Visalert · Built for travellers in Istanbul</div>
        <div className="flex gap-6">
          {['Privacy','Terms','Contact'].map(l => <a key={l} href="#" className="text-white/35 hover:text-white no-underline text-[12px] transition-colors">{l}</a>)}
        </div>
      </footer>
      </div>
    )

}

      export default Footer;