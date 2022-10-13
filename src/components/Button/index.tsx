import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export const Button = ({ children, asChild }: ButtonProps) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={clsx(
        "h-12 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors duration-300 focus:ring-2 ring-gray-500"
      )}
    >
      {children}
    </Component>
  );
};