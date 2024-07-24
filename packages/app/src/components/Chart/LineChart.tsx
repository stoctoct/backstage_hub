import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

// Chart.js 모듈 등록
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

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
    };
    tooltip: {
      callbacks: {
        label: (context: any) => string;
      };
    };
  };
}

export interface LineChartProps {
  title?: string,
  style?: React.CSSProperties;
  data?: ChartData;
  options?: ChartOptions;
  onClick?: () => void;
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

export const LineChart:React.FC<LineChartProps> = ({ title, style, data, options }) => { 
  // console.log("스타일", style === undefined)
  // 샘플 데이터

  const chartData: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: title ? title : "라인 그래프 제목",
        data: [4000, 3500, 2000, 2780, 1000],
        fill: true,
        backgroundColor: '#8884d8',
        borderColor: '#8884d8',
        tension: 0.1,
      },
    ],
  };

  return (
    <Line 
      title={title ? title : "라인 그래프 제목"}
      style={style ? style : {}}
      data={chartData}
      options={options ? options : sampleOptions} />
  )
}
// export const LineChart = () => <Line data={data} options={options} />
// export { LineChart } 
// export const LineChart
  
  
