import React from 'react'

function Student({student,index,handleEditStudent,handleDeleteStudent}) {
    const handleEdit = (student) =>{
handleEditStudent(student,true,"Update")
    }
const handleDelete = (index) => {
    handleDeleteStudent(index)
    
}

  return (
   <tr>
            <td>{index+1}</td>
            <td>{student.studentId}</td>
            <td>{student.studentName}</td>
            <td>{student.studentAge}</td>
            <td>{student.gender}</td>
            <td>
              <div className="template-demo">
                <button
                  type="button"
                  className="btn btn-danger btn-icon-text"
                >
                  Xem
                </button>
                <button
                  type="button"
                  className="btn btn-warning btn-icon-text"
                  onClick={() => handleEdit(student)}
                >
                  Sửa
                </button>
                <button
                  type="button"
                  className="btn btn-success btn-icon-text"
                  onClick={() => handleDelete(index)}
                >
                  Xóa
                </button>
              </div>
            </td>
          </tr>



    
  )
}

export default Student