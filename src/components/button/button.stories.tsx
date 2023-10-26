import type { Meta, StoryObj } from "@storybook/react";
import { Button as ButtonComponent } from ".";
import React from "react";

/** Button allow users to trigger an action or event with a single click. For example, you can use a button for allowing the functionality of submitting a form, opening a dialog, canceling an action, or performing a delete operation. */
const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  title: "Components/Button",
  tags: ["autodocs"],
  /** default args, storybook automatically gen controls for these args */
  args: {
    variant: "default",
    size: "sm",
    children: "Button label",
  },
  argTypes: {
    variant: {
      options: ["default", "primary"],
      control: { type: "select" },
      label: "Variant",
      description: "Button variant",
      table: {
        type: {
          summary: "Default | Primary",
        },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      options: ["sm", "lg"],
      control: { type: "inline-radio" },
      label: "Size",
      description: "Size of button",
      table: {
        type: {
          summary: "sm | lg",
        },
        defaultValue: { summary: "sm" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

/** This is the default behaviour of button component */
export const Button: Story = {
  render: (args) => {
    return (
      <ButtonComponent onClick={() => alert("button clicked")} {...args}>
        {args.children}
      </ButtonComponent>
    );
  },
};
