import React from "react";
import { Story, Meta } from "@storybook/react";
import Input, { InputProps } from "./Input";

export default {
  component: Input,
  title: "Components/Input",
  argTypes: {
    onChange: { action: "changed" },
  },
} as Meta;

const Template: Story<InputProps> = (args: InputProps) => <Input {...args} />;

export const Default: Story<InputProps> = Template.bind({});
Default.args = {
  htmlFor: "name",
  id: "name",
  labelText: "Name",
  type: "text",
  value: "",
};
