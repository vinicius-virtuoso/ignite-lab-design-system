import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { HtmlHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot = (props: TextInputRootProps) => {
  return (
    <div className="flex items-center gap-3 py-4 px-3 rounded bg-gray-800  w-full ring-2 ring-gray-800 focus-within:first-line:right-2 focus-within:ring-cyan-300  transition-all duration-200 h-12">
      {props.children}
    </div>
  );
};
TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}

const TextInputIcon = (props: TextInputIconProps) => {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
};
TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput = (props: TextInputInputProps) => {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
};

TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
