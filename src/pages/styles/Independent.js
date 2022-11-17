import React from 'react';
import { Link as RouterLink} from 'react-router-dom';
import './connectAccount.css';
import {FormControlLabel } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import { Button, } from '@mui/material';




  export default function CheckboxesGroup() {
  const [state, setState] = React.useState({
   gilad: true,
    jason: true,
    antoine: true,
    ja: true,
    anto: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine, } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
  return (
    <>
      <div className="App"> Add Independent Account</div>
      <h2 className="display-4">Hello Katalisia</h2>

      <Box sx={{ display: 'flex' }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Assign responsibility</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={gilad} onChange={handleChange} name="Manage your YouTube account" />}
              label="Manage your YouTube account"
            />
            <FormControlLabel
              control={<Checkbox checked={jason} onChange={handleChange} name="View your YouTube account" />}
              label="View your YouTube account"
            />
            <FormControlLabel
              control={<Checkbox checked={antoine} onChange={handleChange} name="Manage your YouTube videos" />}
              label="Manage your YouTube videos"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={antoine}
                  onChange={handleChange}
                  name="View and manage your assets and associated content on YouTube"
                />
              }
              label="View and manage your assets and associated content on YouTube"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={antoine}
                  onChange={handleChange}
                  name="View private information of your YouTube channel relevant during the audit process with a YouTube partner"
                />
              }
              label="View private information of your YouTube channel relevant during the audit process with a YouTube partner"
            />
          </FormGroup>
          <FormHelperText>Be careful</FormHelperText>
        </FormControl>
        <FormControl required error={error} component="fieldset" sx={{ m: 3 }} variant="standard">
          <FormHelperText>You can display an error</FormHelperText>
        </FormControl>
      </Box>
      <Button to="/" size="large" variant="contained" component={RouterLink}>
        Update Linkdin Account +
      </Button>
    </>
  );
}
      
    
    