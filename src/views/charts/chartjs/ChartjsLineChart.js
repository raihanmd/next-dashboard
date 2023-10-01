import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Dataset'
    }
  }
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export default function ChartjsLineChart() {
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          [150, 100, 270, 210, 160, 160, 202, 265, 210, 270, 255, 290, 360, 375],
          [125, 105, 130, 215, 195, 140, 160, 230, 300, 220, 170, 210, 200, 280],
          [99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90, 140, 130, 180],
          [99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90, 140, 130, 180],
          [99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90, 140, 130, 180],
          [99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90, 140, 130, 180],
          [99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90, 140, 130, 180]
        ],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      },
      {
        label: 'Dataset 2',
        data: [
          [150, 100, 270, 210, 160, 160, 202, 265, 210, 270, 255, 290, 260, 375],
          [125, 105, 130, 215, 195, 140, 160, 230, 300, 220, 170, 210, 200, 280],
          [99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90, 140, 130, 180],
          [125, 105, 130, 215, 195, 140, 160, 230, 300, 220, 170, 210, 200, 280],
          [150, 100, 270, 210, 160, 160, 202, 265, 210, 270, 255, 290, 260, 375],
          [99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90, 140, 130, 180],
          [99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90, 140, 130, 180]
        ],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  }

  return <Line options={options} data={data} />
}
