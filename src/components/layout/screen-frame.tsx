import { cn } from "@/lib/utils";

export function ScreenFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full min-h-svh w-full items-center justify-center p-0 md:p-4 lg:p-8">
      <div 
        className={cn(
          "relative flex h-full min-h-svh w-full flex-col",
          "md:h-auto md:min-h-0 md:max-w-[1440px] md:aspect-video md:rounded-3xl",
          "md:bg-black/50 md:border-2 md:border-brand-violet/20",
          "md:shadow-glow-dual",
          "overflow-hidden"
        )}
      >
        {children}
      </div>
    </div>
  );
}
