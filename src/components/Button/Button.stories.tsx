import React from "react";
import { Story, Meta } from "@storybook/react";

import Button, { ButtonProps } from "./Button";

export default {
  component: Button,
  title: "Components/Button",
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Default: Story<ButtonProps> = Template.bind({});
Default.args = {
  label: "Open",
};
