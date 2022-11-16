import React from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div>
      <>
        <MDBTable align="middle">
          <MDBTableHead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Title</th>
              <th scope="col">Position</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style={{ bordersize: '2px', width: '45px', height: '45px' }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">John Doe</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">Software engineer</p>
                <p className="text-muted mb-0">IT department</p>
              </td>
              <td>Senior</td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                  Edit
                </MDBBtn>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                    alt=""
                    style={{ width: '45px', height: '45px' }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Alex Ray</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">Consultant</p>
                <p className="text-muted mb-0">Finance</p>
              </td>
              <td>Junior</td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                  Edit
                </MDBBtn>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                    alt=""
                    style={{ width: '45px', height: '45px' }}
                    className="rounded-circle"
                  />
                </div>
                <div className="ms-3">
                  <p className="fw-bold mb-1">Alex Ray</p>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">Designer</p>
                <p className="text-muted mb-0">UI/UX</p>
              </td>
              <td>Senior</td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                  Edit
                </MDBBtn>
              </td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </>
    </div>
  );
}
