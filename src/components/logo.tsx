import Link from 'next/link';
import { Briefcase } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-xl font-headline font-bold" aria-label="Intern Us Home">
      <div className="w-7 h-7 bg-brand-cyan/10 flex items-center justify-center rounded-lg border border-brand-cyan/20">
        <Briefcase className="w-4 h-4 text-brand-cyan" />
      </div>
      <span className="text-glow-primary">Intern Us</span>
    </Link>
  );
}
