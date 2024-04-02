import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Пример/Чекбокс",
  component: Checkbox,
  argTypes: {
    checked: { control: "boolean" },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Checked = Template.bind();
Checked.args = {
  label: "Checked",
  checked: true,
};

export const Unchecked = Template.bind();
Unchecked.args = {
  label: "Unchecked",
  checked: false,
};

export const Intermediate = Template.bind();
Intermediate.args = {
  label: "Intermediate",
  checked: "intermediate",
};

export const Disabled = Template.bind();
Disabled.args = {
  label: "Disabled",
  checked: false,
  disabled: true,
};
