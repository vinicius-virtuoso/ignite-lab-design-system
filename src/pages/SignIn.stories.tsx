import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { SignIn } from "./SignIn";
import { rest } from "msw";

export default {
  title: "Pages/Sign in",
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/sessions", (req, res, ctx) => {
          return res(
            ctx.json({
              message: "Login realizado!",
            })
          );
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText("johndoe@example.com"),
      "Vinixj9@gmas.com"
    );
    userEvent.type(canvas.getByPlaceholderText("**********"), "123456");

    userEvent.click(canvas.getByRole("button"));

    waitFor(() => {
      return expect(canvas.getByText("Login Realizado!")).toBeInTheDocument();
    });
  },
};
