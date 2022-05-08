import React from 'react';
import SubmitButton from './SubmitButton';

export default {
  title: 'Example/SubmitButton',
  component: SubmitButton,
};

const Template = ({ children, ...args }) => (
  <SubmitButton {...args}>{children}</SubmitButton>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Submit',
};
