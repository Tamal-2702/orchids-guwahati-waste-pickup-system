import React from 'react';

export function SDGLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <img 
      src="https://raw.githubusercontent.com/un-stats/sdg-logos/master/en/sdg-en-goal-12.png" 
      alt="SDG 12: Responsible Consumption and Production" 
      className={className}
    />
  );
}
