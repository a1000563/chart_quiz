import React from 'react'
import {
    CContainer,
    CRow,
    CCol,
    CCard,
    CCardBody,
    CCardTitle,
    CCardText,
    CButton,
  } from '@coreui/react';
  import { LineChart } from './line-chart.js'

export default function ComponentOne() {
  return (
    <CContainer className="my-5">
        <CRow>
        <h1 className="text-center mb-4">折線圖</h1>
        <div>
          <LineChart/>
        </div>
        </CRow>
    </CContainer>
  )
}
