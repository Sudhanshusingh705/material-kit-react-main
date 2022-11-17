import React from 'react';
import './styles/connectAccount.css';
import Button from '@mui/material/Button';
import { Link as RouterLink} from 'react-router-dom';


export default function App() {
  return (
    <div className="container accContainer">
      <h2 className="ms-2">Connect your social media account</h2>
      <h2 className="mb-2 ms-2 profile">Custommer Profile</h2>

      <div className="youtube">
        <h2 className="mb-2 ms-2" style={{ borderBottom: '1px solid grey', padding: '10px' }}>
          Your youtube Channels
        </h2>

        <Button
          to="./styles/Independent.js"
          size="large"
          className="btn-sty"
          color="warning"
          variant="contained"
          component={RouterLink}
        >
          Add Independent Account +
        </Button>

        <Button
          to="./styles/Independent.js"
          size="large"
          variant="contained"
          className="btn-sty"
          color="warning"
          component={RouterLink}
        >
          Update Linkedin Account +
        </Button>
      </div>
    </div>
  );
}
