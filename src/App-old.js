import React, { useState } from "react";
import {
  CContainer,
  CRow,
  CCol,
} from "@coreui/react";
import ComponentOne from "./components/component-one";
import ComponentTwo from "./components/component-two";
import ComponentThree from "./components/component-three";
import { CPagination, CPaginationItem } from "@coreui/react";

const App = () => {
  const [page, setPage] = useState(1);

  const numPage = [1, 2, 3, 4];

  const turnPage = (v) => {
    setPage(v);
  };

  return (
    <CContainer>
      <CPagination
        aria-label="Page navigation example"
        class="d-flex justify-content-center align-items-center my-3"
      >
        <CPaginationItem
          disabled={page === 1}
          onClick={() => {
            turnPage(page - 1);
          }}
        >
          Previous
        </CPaginationItem>
        {numPage.map((v, i) => {
          return (
            <CPaginationItem
              active={page === v}
              onClick={() => {
                turnPage(v);
              }}
            >
              {v}
            </CPaginationItem>
          );
        })}
        <CPaginationItem
          disabled={page === numPage.length}
          onClick={() => {
            turnPage(page + 1);
          }}
        >
          Next
        </CPaginationItem>
      </CPagination>
      {page === 1 ? (
        <CRow>
          <CCol md={12} lg={12}>
            <ComponentOne />
          </CCol>
        </CRow>
      ) : page === 2 ? (
        <CRow>
          <CCol md={12} lg={12}>
            <ComponentTwo />
          </CCol>
        </CRow>
      ) : (
        (page === 3) ? (
          <CRow>
          <CCol md={12} lg={12}>
            <ComponentOne />
          </CCol>
          <CCol md={12} lg={12}>
            <ComponentTwo />
          </CCol>
        </CRow>
        ) : (
          <CRow>
          <CCol md={12} lg={12}>
            <ComponentThree />
          </CCol>
        </CRow>
        )
      )}
    </CContainer>
  );
};

export default App;
