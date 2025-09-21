import { cn } from "@/lib/utils";

interface HealthyogiButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
}

export default function HealthyogiButton({ 
  children, 
  onClick, 
  disabled = false, 
  type = 'button',
  variant = 'primary'
}: HealthyogiButtonProps) {
  const variants = {
    primary: 'bg-forest-green text-off-white rounded-sm py-2 px-4 cursor-pointer',
    secondary: 'bg-off-white text-forest-green border border-forest-green rounded-sm py-2 px-4 cursor-pointer'
  }
  return (
    <button 
      className={cn(variants[variant])}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}