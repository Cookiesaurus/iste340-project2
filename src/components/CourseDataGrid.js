// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { DataGrid } from '@material-ui/data-grid';

// const CourseDataGrid = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     axios.get('https://ist.rit.edu/api/course')
//       .then(res => {
//         setCourses(res.data.courses);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   const columns = [
//     { field: 'code', headerName: 'Code', width: 150 },
//     { field: 'title', headerName: 'Title', width: 400 },
//     { field: 'description', headerName: 'Description', width: 700 },
//     { field: 'creditHours', headerName: 'Credit Hours', width: 150 },
//   ];

//   return (
//     <div style={{ height: 600, width: '100%' }}>
//       <DataGrid rows={courses} columns={columns} pageSize={10} />
//     </div>
//   );
// }

// export default CourseDataGrid;
