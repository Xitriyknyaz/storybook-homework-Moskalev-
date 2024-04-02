import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: { control: 'color' }, // Добавляем аргумент для изменения цвета кнопки
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } }, // Добавляем аргумент для изменения размера кнопки
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Button',
  color: '#007bff', // Цвет для Primary Button
  size: 'medium', // Размер для Primary Button
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary Button',
  color: '#6c757d', // Цвет для Secondary Button
  size: 'small', // Размер для Secondary Button
};

export const Success = Template.bind({});
Success.args = {
  text: 'Success Button',
  color: '#28a745', // Цвет для Success Button
  size: 'large', // Размер для Success Button
};

export const Warning = Template.bind({});
Warning.args = {
  text: 'Warning Button',
  color: '#ffc107', // Цвет для Warning Button
  size: 'medium', // Размер для Warning Button
};

export const Danger = Template.bind({});
Danger.args = {
  text: 'Danger Button',
  color: '#dc3545', // Цвет для Danger Button
  size: 'small', // Размер для Danger Button
};