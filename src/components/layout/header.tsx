import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const navLinks = [
    { href: "/jobs", label: "Find Internships" },
    { href: "/employers", label: "For Employers" },
    { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex h-20 items-center justify-between p-4 md:p-6">
        <Logo />
        <nav className="hidden md:flex items-center gap-6 rounded-full bg-black/20 backdrop-blur-md px-6 py-2 border border-white/10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-code text-sm text-foreground/80 hover:text-foreground hover:text-glow-primary transition-all">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" className="font-code hover:bg-white/5">Login</Button>
          <Button className="font-code bg-brand-cyan text-brand-dark-blue hover:bg-brand-cyan/90 shadow-[0_0_15px_theme(colors.brand-cyan/50%)]">Sign Up</Button>
        </div>
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-brand-dark-space/95 backdrop-blur-xl border-l-brand-violet/20">
                    <div className="flex flex-col h-full">
                        <Logo />
                        <nav className="flex flex-col gap-6 mt-12">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="font-code text-lg text-foreground/80 hover:text-foreground hover:text-glow-primary transition-all">
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                        <div className="mt-auto flex flex-col gap-4">
                            <Button variant="outline" className="font-code w-full border-white/20 bg-transparent">Login</Button>
                            <Button className="font-code w-full bg-brand-cyan text-brand-dark-blue hover:bg-brand-cyan/90 shadow-[0_0_15px_theme(colors.brand-cyan/50%)]">Sign Up</Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
