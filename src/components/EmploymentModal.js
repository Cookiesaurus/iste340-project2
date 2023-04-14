// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Dialog, DialogTitle, DialogContent, Typography } from '@material-ui/core';
// import { DataGrid } from '@material-ui/data-grid';

// const EmploymentModal = () => {
//   const [employment, setEmployment] = useState({});
//   const [open, setOpen] = useState(false);

//   const handleClose = () => {
//     setOpen(false);
//   }

//   useEffect(() => {
//     axios.get('https://ist.rit.edu/api/employment')
//       .then(res => {
//         setEmployment(res.data);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   const columns = [
//     { field: 'employer', headerName: 'Employer', width: 200 },
//     { field: 'degree', headerName: 'Degree', width: 150 },
//     { field: 'city', headerName: 'City', width: 150 },
//     { field: 'state', headerName: 'State', width: 100 },
//     { field: 'position', headerName: 'Position', width: 200 },
//     { field: 'startDate', headerName: 'Start Date', width: 150 },
//     { field: 'endDate', headerName: 'End Date', width: 150 },
//   ];

//   return (
//     <div>
//       <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
//         Employment
//       </Button>
//       <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
//         <DialogTitle>Employment</DialogTitle>
//         <DialogContent>
//           <Typography>{employment.introduction}</Typography>
//           <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
//             <Typography variant="h6">Degree Statistics</Typography>
//             <Typography>{employment.degreeStatistics}</Typography>
//           </div>
//           <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
//             <Typography variant="h6">Top Employers</Typography>
//             <Typography>{employment.employers}</Typography>
//           </div>
//           <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
//             <Typography variant="h6">Career Outcomes</Typography>
//             <Typography>{employment.careers}</Typography>
//           </div>
//           <div style={{ height: 600, width: '100%' }}>
//             <DataGrid rows={employment.coopTable} columns={columns} pageSize={10} />
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// export default EmploymentModal;
