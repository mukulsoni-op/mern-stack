//wil be writing routes funtion here
import studentData from "../model/student";
//get req. fetch dataa  from server or db.
export  const getStudents = async (req,res) => {
    // res.send("working");
    try {
        const allStudents = await studentData.find();
        res.status(200).json(allStudents);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
//pst req. fetch data from client side.
const createStudent = async (req,res) => {
  
        const student= req.body;
        const newStudent = new studentData(student);//modelname(input)
        try {
            newStudent.save();
            res.status(201).json(newStudent);//passing it into json format
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}