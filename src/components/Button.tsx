import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export const Button = ({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={clsx(
        "py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors duration-300 focus:ring-2 ring-gray-500",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
