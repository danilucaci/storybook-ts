import React from "react";
import { Story, Meta } from "@storybook/react";

import Button, { ButtonProps } from "./Button";

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Primary: Story<ButtonProps> = Template.bind({});
Primary.args = {
  label: "Click",
  primary: true,
  htmlType: "button",
};

export const Outlined: Story<ButtonProps> = Template.bind({});
Outlined.args = {
  label: "Click",
  outlined: true,
  htmlType: "button",
};
