import React, { useEffect, useState } from 'react'
import Control from './Control'
import Liststudent from './Liststudent'
import Form from './Form'

function ParentComp() {
// CRUD 
let studentList =[
    {
        studentId:"sv001",
        studentName:"Nguyễn Văn AAAAA",
        studentAge :20,
        gender:"Nam",
        birthDay:"12/02/2000",
        birthPlace:"Hà Nội",
        address:"Hà Nội"
    },
    {
        studentId:"sv002",
        studentName:"Nguyễn Văn B",
        studentAge :40,
        gender:"Nam",
        birthDay:"12/02/1988",
        birthPlace:"Hà Nội",
        address:"SG"
    },
    {
        studentId:"sv003",
        studentName:"Nguyễn Thị C",
        studentAge :20,
        gender:"Nữ",
        birthDay:"12/02/2004",
        birthPlace:"Đà Nẵng",
        address:"DN"
    }

]

const [students,setStudent] = useState(studentList)


// viết hàm tạo ra mảng dùng để tìm kiềm thông tin từ mảng chứa students
const createSearchArr = function () {
 let resultArr= students.map( student =>{
    let result=""
for (const key in student) {
   result+=student[key]
}
return result
})
return resultArr
}

// viết state chứa thông tin mảng dùng để tìm kiềm thông tin 
const [searchArr,setsearchArr] = useState(createSearchArr())

// mảng dùng để tìm kiềm thông tin  sẽ cập nhật khi hàm chứa studens thay dổi
useEffect(()=>{
  setsearchArr(createSearchArr())
  console.log(searchArr);
},[students])

// viết hàm tìm kiếm thông tin học sinh

const[temp,setTemp]= useState([])
const searchStudent = function (value) {

  let result =[]
  for (let index = 0; index < searchArr.length; index++) {
      if (searchArr[index].includes(value)) {
          result.push(students[index])
      }
  }
  setTemp(students)
setStudent(result)
}

// viết hàm hiển thị lại giao diên sau khi tìm kiếm

const backtoOrigin = () => {
  setStudent(temp)
  setAction("create")
}

    // r1

// t1 khia báo state toggle
const[toggle,setToggle] = useState(false)
// t2 xây dựng hàm set toggle

// khai báo hàm thêm student từ Form
const addStudentInfo = (studentInfo) => {
  console.log(temp);
  setStudent(temp)
setStudent([...students,studentInfo])

}


// u3 xây dưng hàm nhận giá trị từ student
// khai báo biến toàn cưc cho hành dông 
const[action,setAction] = useState("create")

// khai báo state để lưu data từ student

const[selectStudent,setselectStudent] = useState({})
const handleEditStudent = (student,toggleEdit,actionName) =>{

setselectStudent(student)
setToggle(toggleEdit)
setAction(actionName)

}

// hàm cập nhật dữ liêu sinh viên

const handleUpdate =(studentInfo)=>{

const updateData = students.map(student => 
student.studentId===studentInfo.studentId ? studentInfo :student
)
    setStudent(updateData)
}

// hàm xóa sinh viên 
const handleDeleteStudent =(index) =>{

let result = [...students]
// for (let i = 0; i < students.length; i++) {
// if (i != index) {
//     result.push(students[i])
// }
// }
result.splice(index,1)
setStudent(result)


}
useEffect(()=>{console.log("aaa" )},[students])
  return (
    <div>
<div className="row">
  <div className="col-lg-7 grid-margin stretch-card">
    <div className="card">
      {/* START CONTROL */}
    <Control 
    setToggle ={setToggle}
    setAction={setAction}
    action={action}
    searchStudent ={searchStudent}
    backtoOrigin={backtoOrigin}
    />
      {/* END CONTROL */}
      {/* START LIST STUDENT */}
      {/* r2 truyền dữ liệu cho con */}
    <Liststudent students={students} 
        handleEditStudent={handleEditStudent}
        setAction={setAction}
        handleDeleteStudent={handleDeleteStudent}
            />
      {/* END LIST STUDENT */}
    </div>
  </div>
  {/* START FORM SNH VIEN */}
{toggle && <Form addStudentInfo={addStudentInfo}
               setToggle={setToggle}
               action={action}
               setAction={setAction}
               selectStudent={selectStudent}
               setselectStudent={setselectStudent}
               handleUpdate={handleUpdate}
               />
               
               }
  


  {/* END FORM SINH VIÊN */}
</div>



    </div>
  )
}

export default ParentComp