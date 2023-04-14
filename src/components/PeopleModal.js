// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Dialog, DialogTitle, DialogContent, Typography, Tab, Tabs } from '@material-ui/core';
// import { DataGrid } from '@material-ui/data-grid';

// const PeopleModal = () => {
//   const [people, setPeople] = useState([]);
//   const [value, setValue] = useState(0);
//   const [open, setOpen] = useState(false);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   }

//   useEffect(() => {
//     axios.get('https://ist.rit.edu/api/people')
//       .then(res => {
//         setPeople(res.data);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   const facultyColumns = [
//     { field: 'name', headerName: 'Name', width: 200 },
//     { field: 'title', headerName: 'Title', width: 200 },
//     { field: 'email', headerName: 'Email', width: 200 },
//     { field: 'phone', headerName: 'Phone', width: 150 },
//     { field: 'office', headerName: 'Office', width: 200 },
//     { field: 'website', headerName: 'Website', width: 200 }
//   ];

//   const staffColumns = [
//     { field: 'name', headerName: 'Name', width: 200 },
//     { field: 'title', headerName: 'Title', width: 200 },
//     { field: 'email', headerName: 'Email', width: 200 },
//     { field: 'phone', headerName: 'Phone', width: 150 },
//     { field: 'office', headerName: 'Office', width: 200 }
//   ];

//   return (
//     <div>
//       <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
//         People
//       </Button>
//       <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
//         <DialogTitle>People</DialogTitle>
//         <DialogContent>
//           <Tabs value={value} onChange={handleChange}>
//             <Tab label="Faculty" />
//             <Tab label="Staff" />
//           </Tabs>
//           <div style={{ height: 600, width: '100%' }}>
//             {value === 0 &&
//               <DataGrid rows={people.faculty} columns={facultyColumns} pageSize={10} />
//             }
//             {value === 1 &&
//               <DataGrid rows={people.staff} columns={staffColumns} pageSize={10} />
//             }
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// export default PeopleModal;