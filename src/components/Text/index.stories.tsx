import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from ".";

export default {
  title: "Component/Text",
  component: Text,
  args: {
    children: "Paragraph normal",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};
export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
    children: "Paragraph small",
  },
};
export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
    children: "Paragraph large",
  },
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Testando</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
