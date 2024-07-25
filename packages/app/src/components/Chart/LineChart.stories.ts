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
    backgroundColor: { control: 'color' },
    lineColor: { control: 'color' },
    markerColor: { control: 'color' },
    // style: {control: 'object'}
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof LineChart>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: '라인 그래프',
    width: '600px',
    data: [4000, 3000, 2000, 2780, 1890],
    lineColor : '#8884d8', 
    markerColor : '#8884d8'
  },
};

  // const inputLineColor = lineColor ? lineColor : '#8884d8'
  // const inputMarkerColor = markerColor ? markerColor : '#8884d8'
