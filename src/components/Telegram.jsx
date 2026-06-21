

function Telegram() {
    return (  <div><a href="https://t.me/visalert_bot" target="_blank" rel="noreferrer"
                style={{ position:'absolute', bottom:10, right:18, zIndex:30, transform:'rotate(10deg)', transition:'transform .2s ease', textDecoration:'none' }}
                onMouseEnter={e => e.currentTarget.style.transform='rotate(6deg) scale(1.08)'}
                onMouseLeave={e => e.currentTarget.style.transform='rotate(10deg) scale(1)'}>
                <svg viewBox="0 0 130 130" width="110" height="110" xmlns="http://www.w3.org/2000/svg">
                  <path d="M65,5 C84,2 103,14 114,32 C125,50 127,74 118,93 C109,112 90,124 68,127 C46,130 23,120 12,101 C1,82 3,56 15,37 C27,18 46,8 65,5Z" fill="#0ea5e9"/>
                  <path d="M65,13 C82,10 99,21 109,37 C119,53 121,74 113,91 C105,108 88,119 68,122 C48,125 28,116 18,99 C8,82 10,59 21,42 C32,25 48,16 65,13Z" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="5 3.5" opacity="0.45"/>
                  <path d="M65 28c-10.5 0-19 8.5-19 19s8.5 19 19 19 19-8.5 19-19-8.5-19-19-19zm8.84 12.97-3.12 14.72c-.23 1.04-.85 1.3-1.72.81l-4.76-3.51-2.3 2.21c-.25.25-.47.47-.96.47l.34-4.84 8.82-7.96c.38-.34-.08-.53-.59-.19l-10.9 6.86-4.69-1.46c-1.02-.32-1.04-1.02.21-1.51l18.36-7.08c.85-.31 1.6.21.31 1.48z" fill="white"/>
                  <text x="65" y="84" textAnchor="middle" fill="white" fontFamily="DM Sans,sans-serif" fontSize="10" fontWeight="800" letterSpacing="1">TELEGRAM</text>
                  <text x="65" y="97" textAnchor="middle" fill="white" fontFamily="DM Sans,sans-serif" fontSize="10" fontWeight="800" letterSpacing="1">ALERTS</text>
                </svg>
              </a></div>);
}

export default Telegram;