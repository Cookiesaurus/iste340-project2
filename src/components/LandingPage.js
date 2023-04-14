import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';

const LandingPage = () => {
  const [about, setAbout] = useState('');

  useEffect(() => {
    axios.get('https://ist.rit.edu/api/about')
      .then(res => {
        setAbout(res.data.about[0].description);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>About Us</Typography>
      <Typography variant="body1">{about}</Typography>
    </div>
  );
}

export default LandingPage;
