import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-xl font-headline font-bold" aria-label="Intern Us Home">
      <div className="w-8 h-8 flex items-center justify-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--secondary))" />
              <stop offset="100%" stopColor="hsl(var(--primary))" />
            </linearGradient>
          </defs>
          <path
            d="M26 38C26 32.4772 30.4772 28 36 28C41.5228 28 46 32.4772 46 38C46 43.5228 41.5228 48 36 48C30.4772 48 26 43.5228 26 38ZM50 38C50 32.4772 54.4772 28 60 28C65.5228 28 70 32.4772 70 38C70 43.5228 65.5228 48 60 48C54.4772 48 50 43.5228 50 38ZM74 38C74 32.4772 78.4772 28 84 28C89.5228 28 94 32.4772 94 38C94 43.5228 89.5228 48 84 48C78.4772 48 74 43.5228 74 38Z"
            stroke="url(#logo-gradient)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M36 48C28 52 22 68 22 78L22 84C22 90.6274 27.3726 96 34 96H40C40 96 40 88 40 84C40 70 48 64 50 62M60 48C68 52 74 68 74 78L74 84C74 90.6274 68.6274 96 62 96H56C56 96 56 88 56 84C56 70 48 64 50 62M60 48C52 52 46 68 46 78L46 84C46 90.6274 51.3726 96 58 96H64C64 96 64 88 64 84C64 70 72 64 70 62M84 48C76 52 70 68 70 78L70 84C70 90.6274 75.3726 96 82 96H88C88 96 88 88 88 84C88 70 80 64 78 62"
            stroke="url(#logo-gradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-glow-primary">Intern Us</span>
    </Link>
  );
}
