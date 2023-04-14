import React from 'react';
import { Container, Grid } from '@material-ui/core';
// import Header from './components/Header';
// import AboutSection from './components/AboutSection';
// import DegreesModal from './components/DegreesModal';
import MinorsModal from './components/MinorsModal';
import EmploymentModal from './components/EmploymentModal';
import PeopleModal from './components/PeopleModal';
import CourseDataGrid from './components/CourseDataGrid';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Container>
        {/* <AboutSection /> */}
        <Grid container spacing={3}>
          {/* <Grid item xs={12} md={6}>
            <DegreesModal />
          </Grid> */}
          <Grid item xs={12} md={6}>
            <MinorsModal />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
            <EmploymentModal />
          </Grid>
          <Grid item xs={12} md={6}>
            <PeopleModal />
          </Grid>
        </Grid>
        <CourseDataGrid />
      </Container>
    </div>
  );
}

export default App;
