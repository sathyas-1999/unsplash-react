import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
function Imagebar(props){
  const [searchTerm,setSearchTerm]=useState('')
  let history=useHistory();
  const handlekeypress=(e)=>{
    setSearchTerm(e.target.value);
  }
  const submitted=(e)=>{
    e.preventDefault();
    props.query(searchTerm);
    history.push('/search');
  }

        return(
            <section className="hero" id="myDIV">
    <div className="hero-container">
      <div className="hero-content">
        <h1>Unsplash</h1>
        <p>
          The internet’s source of freely useable images.<br />
          Powered by creators everywhere.
        </p>
        <div className="hero-search-form">
          <form style={{position:"relative"}}onSubmit={submitted}>
   <i className="fa fa-search" id="search-icon" style={{position: "absolute", top: "20px", left:"20px"}}></i>
<i className="material-icons" id="focus-icon" style={{position:"absolute",top:"18px",right:"20px"}}>&#xe3b5;</i>
<input type="text" placeholder="Search" id="searchbar" onChange={handlekeypress}/>
          </form>
        </div>
        <div className="trending-search-tags">
          <p>Trending searches: <a href="#">flower</a>, <a href="#">wallpaper</a>, <a href="#">sad</a>, <a href="#">love</a></p>
        </div>
      </div>
    </div>
  </section>

        );
}
export default Imagebar