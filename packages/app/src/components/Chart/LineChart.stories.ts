import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LineChart, sampleData } from './LineChart';
import { fn } from '@storybook/test';
import { LineChartProps, ChartData } from './LineChart';

const meta = {
  title: 'Components/LineChart',
  component: LineChart,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // data: ChartData
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof LineChart>;

// argTypes: {
//   backgroundColor: { control: 'color' },
// },

// export interface ButtonProps {
//   primary?: boolean;
//   backgroundColor?: string;
//   size?: 'small' | 'medium' | 'large';
//   label: string;
//   onClick?: () => void;
// }


export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // primary: true,
    // label: 'Button',
  },
};