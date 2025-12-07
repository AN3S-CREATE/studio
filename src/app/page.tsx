import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Search, Sparkles, Users, MessageSquare } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlowingCard } from '@/components/glowing-card';

export default function Home() {
  const heroBg = PlaceHolderImages.find(p => p.id === 'hero-bg');
  
  return (
    <div className="w-full h-full relative overflow-y-auto">
      {heroBg && (
        <Image
          src={heroBg.imageUrl}
          alt={heroBg.description}
          fill
          className="object-cover z-0 opacity-20"
          data-ai-hint={heroBg.imageHint}
          priority
        />
      )}

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16 text-center flex flex-col items-center">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-400">
            Your Future,
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-brand-cyan to-brand-violet animate-gradient-shimmer bg-[200%_auto]">
            Illuminated.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-foreground/70 font-body">
          Intern Us is your AI-powered copilot for launching a successful career in South Africa. We connect ambitious students with their perfect internship.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="font-code text-lg bg-brand-cyan text-brand-dark-blue hover:bg-brand-cyan/90 shadow-[0_0_20px_theme(colors.brand-cyan/50%)] transition-all duration-300 hover:scale-105">
            <Search className="mr-2" />
            Find Internships
          </Button>
          <Button size="lg" variant="outline" className="font-code text-lg bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
            <Users className="mr-2" />
            For Employers
          </Button>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Powered by <span className="text-glow-primary">Next-Gen AI</span>
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-foreground/60">
            Leverage our suite of AI tools designed to give you a competitive edge, from building the perfect profile to acing your first interview.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <GlowingCard 
            icon={BrainCircuit}
            title="AI Job Matching"
            description="Our engine intelligently matches you to opportunities based on your skills, interests, and SA-specific realities."
          />
          <GlowingCard 
            icon={Sparkles}
            title="AI Profile Builder"
            description="Automatically improve your CV and profile with AI suggestions, from grammar fixes to quantified achievements."
          />
          <GlowingCard 
            icon={MessageSquare}
            title="AI Interview Simulator"
            description="Build confidence with an AI that asks industry-specific questions and gives you friendly, constructive feedback."
          />
        </div>
      </div>
    </div>
  );
}
