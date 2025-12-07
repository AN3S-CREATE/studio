import { cn } from "@/lib/utils";

function NeonIcon({ icon: Icon, className }: { icon: React.ElementType, className?: string }) {
  return (
    <div className={cn("relative h-16 w-16 flex items-center justify-center rounded-2xl bg-brand-cyan/5 border border-brand-cyan/10", className)}>
      <div className="absolute inset-0 bg-brand-cyan/20 rounded-2xl blur-lg" />
      <Icon className="w-8 h-8 text-brand-cyan drop-shadow-[0_0_8px_theme(colors.brand-cyan)]" />
    </div>
  );
}

interface GlowingCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
}

export function GlowingCard({ icon, title, description, className }: GlowingCardProps) {
  return (
    <div className={cn(
        "relative p-px rounded-3xl overflow-hidden bg-gradient-to-b from-brand-violet/20 to-brand-magenta/20 transition-all duration-300",
        "transform-gpu hover:-translate-y-2 hover:from-brand-cyan/30 hover:to-brand-magenta/30",
        className
    )}>
      <div className="relative bg-brand-dark-space/90 backdrop-blur-xl h-full w-full p-6 md:p-8 rounded-[23px] flex flex-col items-center text-center">
        <NeonIcon icon={icon} />
        <h3 className="font-headline text-2xl mt-6 mb-2 text-glow-primary">{title}</h3>
        <p className="font-body text-foreground/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
