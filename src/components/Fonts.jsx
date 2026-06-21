

function Fonts() {
    return (<style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        .font-serif { font-family: 'DM Serif Display', Georgia, serif; }
        .avatar-sara { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .avatar-mehmet { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
        .avatar-zeynep { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
        .avatar-ali { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
        .avatar-elif { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes blink  { 0%,100%{opacity:1} 50%{opacity:.2} }
        @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        .animate-float-a { animation: floatA 3.5s ease-in-out infinite; }
        .animate-float-b { animation: floatB 4.2s ease-in-out infinite; }
        .animate-blink   { animation: blink 2s ease-in-out infinite; }
        .animate-ticker  { animation: ticker 22s linear infinite; }
        .animate-fadeup  { animation: fadeUp .5s ease both; }
        select { -webkit-appearance:none; appearance:none; }
      `}</style>);
}

export default Fonts;   