import { Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';

export function Footer() {
  const socialLinks = [
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Github, href: '#', name: 'GitHub' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ];

  return (
    <footer className="w-full p-4 md:p-6 border-t border-brand-violet/10 bg-black/20 backdrop-blur-sm mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <p className="text-sm text-foreground/50 font-code">&copy; {new Date().getFullYear()} Intern Us. All rights reserved.</p>
        <div className="flex gap-2 mt-4 md:mt-0">
          {socialLinks.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild>
              <a href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-4 w-4 text-foreground/60 hover:text-brand-cyan transition-colors" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
