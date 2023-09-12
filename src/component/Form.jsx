import React, { useEffect, useState } from 'react'
import { act } from 'react-dom/test-utils';


function Form({ addStudentInfo, setToggle, action,setAction, selectStudent,setselectStudent,handleUpdate }) {
    // tạo state để lưu sinh viên mới
    const [studentInfo, setStudentInfo] = useState({
        studentId: '',
        studentName: '',
        studentAge: 0,
        gender: 'Nam',
        birthDay: '',
        birthPlace: 'Hà Nội',
        address: "",

    });


    const { studentId, studentName, studentAge, gender, birthDay, birthPlace,address } = studentInfo;

    useEffect(()=>{
    setStudentInfo(selectStudent)
    },[selectStudent])
    

    // tạo hàm xử lý đễ nhập sinh viên mới

    const handleInputStudent = (e) => {
        setStudentInfo({ ...studentInfo, [e.target.name]: e.target.value })
        console.log(studentInfo)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        console.log("aaa")
        addStudentInfo(studentInfo)
        setToggle(false)

    }

    const handleEditForm = (e) =>{
        e.preventDefault()
        handleUpdate(studentInfo)
        setToggle(false)
        setAction("create")
        setselectStudent([])
    }
    return (
        <div className="col-5 grid-margin">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Thông tin sinh viên</h3>
                    <form className="form-sample">
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    name={'studentId'}
                                    value={studentId}
                                    onChange={handleInputStudent} 
                                     readOnly={action==="Update" ? true: false}   />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    name={'studentName'}
                                    value={studentName}
                                    onChange={handleInputStudent} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tuổi</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    name={'studentAge'}
                                    value={studentAge}
                                    onChange={handleInputStudent} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Giới tính</label>
                            <div className="col-sm-9">
                                <select className="form-control"
                                    name={'gender'}
                                    value={gender}
                                    onChange={handleInputStudent}>
                                    <option value={"Nam"}>Nam</option>
                                    <option value={"Nữ"}>Nữ</option>
                                    <option value={"Khác"}> Khác</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Ngày sinh</label>
                            <div className="col-sm-9">
                                <input className="form-control" placeholder="dd/mm/yyyy"
                                    name={'birthDay'}
                                    value={birthDay}
                                    onChange={handleInputStudent} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Nơi sinh</label>
                            <div className="col-sm-9">
                                <select className="form-control"
                                    name={'birthPlace'}
                                    value={birthPlace}
                                    onChange={handleInputStudent}
                                >
                                    <option>Hà Nội</option>
                                    <option>TP. Hồ Chí Minh</option>
                                    <option>Đà Nẵng</option>
                                    <option>Quảng Ninh</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Địa chỉ</label>
                            <div className="col-sm-9">
                                <textarea className="form-control" 
                                 name={'address'}
                                 value={address}
                                 onChange={handleInputStudent}
                                
                                />
                            </div>
                        </div>
                        { action ==="create" ? 
                        <button type="submit" className="btn btn-primary me-2" onClick={handleSubmitForm}>
                            Submit
                        </button>
                            : 
                            <button type="submit" className="btn btn-primary me-2" onClick={handleEditForm}>
                            Edit
                        </button>

                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form