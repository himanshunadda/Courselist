import React from 'react'
import { Link } from 'react-router-dom';


function NavBar(props) {
    
    

    const handleSearchInputChange = (event) =>{
        props.setQuerry(event.target.value);
    }

    

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">CourseList</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
        </li>
        
        
      </ul>
      <form className="d-flex">
        <input 
        className="form-control me-2" 
        type="search" 
        placeholder="Search" 
        aria-label="Search"
        value={props.querry}
        onChange={handleSearchInputChange}
        />
        
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar;

