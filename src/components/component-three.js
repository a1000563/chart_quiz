import React from 'react'
import {
    CContainer,
    CRow,
  } from '@coreui/react';
import EChart from './E-chart.js';

export default function ComponentThree() {
  return (
    <CContainer className="my-5">
        <CRow>
        <h1 className="text-center mb-4">ECharts折線圖</h1>
        <div>
          <EChart />
        </div>
        </CRow>
    </CContainer>
  )
}
