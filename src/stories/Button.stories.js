import {Button} from "@mui/material";

export default {
  title: 'Components/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    children: 'Button',
    variant : 'contained',
  },
};

export const Secondary = {
  args: {
    children: 'Button',
    variant : 'outlined',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'Button',
    variant : 'contained',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'Button',
    variant : 'contained',
  },
};
