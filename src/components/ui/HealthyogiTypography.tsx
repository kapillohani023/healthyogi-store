import React from 'react';
import { cn } from '@/lib/utils';

interface HealthyogiTypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  classNameOverride?: string;
}

export default function HealthyogiTypography({ 
  children,
  variant = 'p',
  classNameOverride = '',
  ...props
}: HealthyogiTypographyProps) {
  const variants = {
    h1: 'text-2xl font-bold',
    h2: 'text-xl font-bold',
    h3: 'text-lg font-bold',
    h4: 'text-base font-bold',
    h5: 'text-sm font-bold',
    h6: 'text-xs font-bold',
    p: 'text-base',
  }
  return (
    <div 
      className={cn(variants[variant], classNameOverride)}
      {...props}
    >
      {children}
    </div>
  );
}
