import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Component/ButtonProps",
  component: Button,
  args: {
    children: "Create account",
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
