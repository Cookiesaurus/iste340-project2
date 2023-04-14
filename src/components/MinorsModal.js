import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Dialog, DialogTitle, DialogContent, Typography } from '@material-ui/core';
import MinorAccordion from './MinorAccordion';

const MinorsModal = () => {
  const [minors, setMinors] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  useEffect(() => {
    axios.get('https://ist.rit.edu/api/minors')
      .then(res => {
        setMinors(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Minors
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Minors</DialogTitle>
        <DialogContent>
          {minors.map(m => (
            <MinorAccordion key={m.name} minor={m} />
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default MinorsModal;
