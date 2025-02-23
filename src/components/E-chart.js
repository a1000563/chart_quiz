import React from 'react'
import ReactECharts from "echarts-for-react";
export default function EChart() {
    const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      };
  return (
    <ReactECharts option={option} style={{ height: "400px", width: "100%" }} />
  )
}
