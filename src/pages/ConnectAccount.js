import React from 'react';
import './styles/connectAccount.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="container accContainer">
      <h2 className="ms-2">Connect your social media account</h2>
      <h2 className="mb-2 ms-2 profile">Custommer Profile</h2>

      <div className="youtube">
        <h2 className="mb-2 ms-2" style={{ borderBottom: '1px solid grey', padding: '10px' }}>
          Your youtube Channels
        </h2>

        <Button
          onClick={handleOpen}
          to="./styles/Independent.js"
          size="large"
          className="btn-sty"
          color="warning"
          variant="contained"
        >
          Add Independent Account +
        </Button>

        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultUnChecked />} label="Manage your YouTube account" />
                <FormControlLabel control={<Checkbox defaultUnChecked />} label="View your YouTube account" />
                <FormControlLabel control={<Checkbox defaultUnChecked />} label="Manage your YouTube videos" />
                <FormControlLabel
                  control={<Checkbox defaultUnChecked />}
                  label="View and manage your assets and associated content on YouTube"
                />
                <FormControlLabel
                  control={<Checkbox defaultUnChecked />}
                  label="See, edit, and permanently delete your YouTube videos"
                />
                <FormControlLabel
                  control={<Checkbox defaultUnChecked />}
                  label="See a list of your current active channel members"
                />
              </FormGroup>
            </Typography>
            <RouterLink to="/dashboard/ConnectAccount/auth">
              <Button variant="contained">Next</Button>
            </RouterLink>
          </Box>
        </Modal>

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

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
