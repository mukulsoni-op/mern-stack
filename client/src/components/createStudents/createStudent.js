import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Create() {
  const classes = useStyles();

  const [student, setStudent]= useState({
      regNo:0,
      name:"",
      grade:"",
      section:""

  })

  function createStudent(){
      axios.post("http://localhost:5000/students",student).then(()=> {
          window.location.reload(false);
      });
  }

  return (
      <>
      <h1>Create Student</h1>
    <form className={classes.root} noValidate autoComplete="off">//post?
      <TextField id="outlined-basic" label="registration number" variant="outlined" value={student.regNo} onChange={(event)=> {
          setStudent({...student, regNo:event.target.value}) }} />
      <TextField id="outlined-basic" label="name" variant="outlined" value={student.name} onChange={(event) => {
          setStudent({...student, name:event.target.value})} }/>
      <TextField id="outlined-basic" label="grade" variant="outlined" value={student.grade} onChange={(event) => {
          setStudent({...student, grade:event.target.value})} }/>
      <TextField id="outlined-basic" label="section" variant="outlined" value={student.section} onChange={(event) => {
          setStudent({...student, section: event.target.value}) }} />
      <Button variant="contained" color="primary" onClick={createStudent}>Create</Button>
    </form>
    </>
  );
}
