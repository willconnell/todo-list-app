import React from 'react'

const Header = () => {
    return (
        <div className="row d-flex justify-content-around m-3">
            <h1 className="col-9">To Do List</h1>
            <button className="col-3 btn btn-primary">Add</button>
        </div>
    )
}

export default Header
