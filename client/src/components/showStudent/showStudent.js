import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const [studentList, setStudentList]= useState([]);
useEffect(()=>{
    axios.get("http://localhost:5000/students").then((allStudents)=>{
        setStudentList(allStudents.data);
    });
},[]);



export default function ShowStudents() {
  const classes = useStyles();

  return (
      <>
      <h1>All Students</h1>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
           
            <TableCell align="right">Registration number</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">grade</TableCell>
            <TableCell align="right">section</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList.map((student,key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {student.name}
              </TableCell>
              <TableCell align="right">{student.regNo}</TableCell>
              <TableCell align="right">{student.grade}</TableCell>
              <TableCell align="right">{student.section}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
