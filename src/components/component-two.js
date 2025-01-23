import React from 'react'
import {
    CContainer,
    CRow,
  } from '@coreui/react';
  import { BarChart } from './bar-chart';

export default function ComponentTwo() {
  return (
    <CContainer className="my-5">
        <CRow>
        <h1 className="text-center mb-4">長條圖</h1>
        <div>
          <BarChart/>
        </div>
        </CRow>
    </CContainer>
  )
}
