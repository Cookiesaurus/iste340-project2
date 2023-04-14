import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Dialog, DialogTitle, DialogContent, Typography } from '@material-ui/core';
import DegreeAccordion from './DegreeAccordion.js';

const DegreesModal = () => {
  const [degrees, setDegrees] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  useEffect(() => {
    axios.get('https://ist.rit.edu/api/degrees')
      .then(res => {
        setDegrees(res.data.undergraduate.concat(res.data.graduate));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Degrees
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Degrees</DialogTitle>
        <DialogContent>
          <Typography variant="h5" gutterBottom>Undergraduate</Typography>
          {degrees.filter(d => d.level === 'undergraduate').map(d => (
            <DegreeAccordion key={d.degreeName} degree={d} />
          ))}
          <Typography variant="h5" gutterBottom>Graduate</Typography>
          {degrees.filter(d => d.level === 'graduate').map(d => (
            <DegreeAccordion key={d.degreeName} degree={d} />
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DegreesModal;
