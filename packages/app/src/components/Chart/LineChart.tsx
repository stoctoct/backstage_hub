import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

// Chart.js 모듈 등록
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export interface LineChartProps {
  // title?: string,
  width? :string;
  height? :string;
  // style?: React.CSSProperties;
  data?: number[];
  lineColor? :string;
  markerColor? :string;
  label: string;
  options?: ChartOptions;
  backgroundColor? :string;

  // onClick?: () => void;
}
  
// 데이터 타입 정의
export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    backgroundColor: string;
    borderColor: string;
    tension: number;
  }[];
}

// 차트 옵션 타입 정의
export interface ChartOptions {
  responsive: boolean;
  plugins: {
    legend: {
      position: 'top';
      align: 'start'
    };
    tooltip: {
      callbacks: {
        label: (context: any) => string;
      };
    };
  };
}

export const sampleData: ChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Sample Line Chart',
      data: [4000, 3000, 2000, 2780, 1890],
      fill: false,
      backgroundColor: '#8884d8',
      borderColor: '#8884d8',
      tension: 0.1,
    },
  ],
};

// 차트 옵션
const sampleOptions: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      align: 'start'
    },
    tooltip: {
      callbacks: {
        label: function(context: any) {
          return `${context.dataset.label}: ${context.raw}`;
        },
      },
    },
  },
};

export const LineChart = ({ 
  label, data, options, lineColor, markerColor, backgroundColor, width, height,

 }:LineChartProps) => { 
  // console.log("스타일", style === undefined)
  // 샘플 데이터
  
  const inputData = data ? data : [4000, 3500, 2000, 2780, 1000]
  const inputLineColor = lineColor ? lineColor : '#8884d8'
  const inputMarkerColor = markerColor ? markerColor : '#8884d8'
  const inputWidht = width ? width : '600px'
  const inputHeight = height ? height : '450px'
  const chartData: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: label ? label : "라인 그래프 라벨",
        data: inputData,
        fill: true,
        backgroundColor: inputMarkerColor,
        borderColor: inputLineColor,
        tension: 0.1,
      },
    ],
  };

  return (
    <Line 
      style={{
        backgroundColor: backgroundColor,
        width: inputWidht,
        height: inputHeight
      }}
      data={chartData}
      options={options ? options : sampleOptions} />
  )
}
// export const LineChart = () => <Line data={data} options={options} />
// export { LineChart } 
// export const LineChart
  
  
