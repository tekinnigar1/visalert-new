function Ticker() {
  const countries = [
    '🇳🇱 Netherlands','🇩🇪 Germany','🇫🇷 France','🇮🇹 Italy',
    '🇪🇸 Spain','🇦🇹 Austria','🇧🇪 Belgium','🇨🇭 Switzerland'
  ];

const items = [...countries, ...countries, ...countries];
  return (
    <div className="border-t border-b border-[#e7e2d9] bg-white py-5 overflow-hidden">
      
      <div className="flex w-max animate-ticker gap-14">
        {items.map((c, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-[13px] font-medium text-[#78716c] flex items-center gap-2"
          >
            <span className="text-xl">{c.split(' ')[0]}</span>
            {c.split(' ').slice(1).join(' ')}
          </span>
        ))}
      </div>

    </div>
  );
}

export default Ticker;