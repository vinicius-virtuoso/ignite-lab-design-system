import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { clsx } from "clsx";
import { Check } from "phosphor-react";

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <CheckboxPrimitive.Root
      className="w-6 h-6 rounded bg-gray-800 p-[2px] outline-none"
      {...props}
    >
      <CheckboxPrimitive.CheckboxIndicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckboxPrimitive.CheckboxIndicator>
    </CheckboxPrimitive.Root>
  );
};
