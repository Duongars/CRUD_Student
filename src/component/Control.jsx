import React, { useState } from 'react'


function Control({setToggle,setAction,action,searchStudent,backtoOrigin }) {
const handleAddStudent= () =>{
    setToggle(true)
    setAction("create")
}

const [searchInput,setsearchInput] = useState("")

const handleSearchValue = (e) => {
  e.preventDefault()
searchStudent(searchInput.trim())
setAction("search")
setToggle(false)

}

  return (
    <div className="card-header">
        <div className="row">
          <div className="col-3">
        { action === "create" ? 
            <button type="button" className="btn btn-primary btn-icon-text"
            onClick={handleAddStudent }
             >
              Thêm mới sinh viên
            </button>:
                 ""
        }

          </div>
          <div className="col-6">
            <form className="search-form" action="#">
              <i className="icon-search" />
              <input
                type="search"
                className="form-control"
                placeholder="Search Here"
                title="Search here"
                onChange={ (e) => setsearchInput(e.target.value)}
              />
              <button className="btn btn-primary btn-icon-text"
              onClick={handleSearchValue}
              >
                Tìm kiếm
              </button>
              <button className="btn btn-primary btn-icon-text"
              onClick={backtoOrigin}
              >
                Back
              </button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select className="form-control">
              <option value="">Sắp xếp</option>
              <option value="">ABC def</option>
              <option value="">ABC def</option>
              <option value="">ABC def</option>
            </select>
          </div>
        </div>
      </div>
  )
}

export default Control