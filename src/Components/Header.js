import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
function Header(props){
  let history=useHistory();
	function toggleIcon(){
        var togglebtn=document.getElementById("mySidenav");
        togglebtn.classList.toggle("mystyle");
    }
    function toggleMenu(){
        var togglemenu=document.getElementById("mySidenav1");
        togglemenu.classList.toggle("mystyle");
    }
    const [searchTerm,setSearchTerm]=useState('')
    const handlekeypress=(e)=>{
      setSearchTerm(e.target.value);
    }
    const submitted=(e)=>{
      e.preventDefault();
      props.query(searchTerm);
      history.push('/search');
    }
    return(
        <nav className="navbar">
      <div className="left">
        <div className="logo">
          <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/unsplash-512.png" />
          <h1 style={{marginLeft:"40px"}}>Unsplash</h1>
          <p style={{marginLeft:"40px",fontSize:"12px"}}>Photos for everyone</p>
        </div>
        <div className="nav-search-form">
          <form style={{position:"relative"}} onSubmit={submitted}>
<i className="fa fa-search" style={{position: "absolute", top: "10px", left:"20px"}}></i>
<i className="material-icons">&#xe3b5;</i>
<input type="text" placeholder="Search" id="search" onChange={handlekeypress}/>
          </form>
        </div>
      </div>
      <ul className="nav">
<li className="list"><a href="#" className="home">Explore</a></li>
        <li className="list"><a href="#" className="home">We're hiring</a></li>
        <li className="list"><i className="fa fa-ellipsis-h" id="ellipse" onClick={toggleIcon}></i>
		<div id="mySidenav" className="sidenav">
		<a href="#">About</a>
		<a href="#">Wallpapers</a>
		<a href="#">Blog</a>
		<a href="#">Topics</a>
		<a href="#">Collections</a>
		<a href="#">Community</a>
		<a href="#">History</a>
		<a href="#">Made with Unsplash</a>
		<a href="#">API/Developers</a>
		<a href="#">Official Apps</a>
		</div></li>
        <li className="list"><button className="btn" className="home">Submit</button></li>
<li className="list"><a href='/Login' className="home">Login</a></li>
        <li><a href="/joinfree"className="join" style={{width:"80px"}}>Join free</a></li>
<li><i className="fa fa-bars" id="menubar" onClick={toggleMenu}></i>
<div id="mySidenav1" className="sidenav1">
		<a href="#">About</a>
		<a href="#">Wallpapers</a>
		<a href="#">Blog</a>
		<a href="#">Topics</a>
		<a href="#">Collections</a>
		<a href="#">Community</a>
		<a href="#">History</a>
		<a href="#">Made with Unsplash</a>
		<a href="#">API/Developers</a>
		<a href="#">Official Apps</a>
		<a href="#">Explore</a>
		<a href="#">We're hiring</a>
		<a href='/Login' className="home">Login</a>
        <a href='/joinfree'className="join"style={{marginLeft: "20px",marginRight: "20px",marginBottom: "20px"}}>Join free</a>
		<button className="btn" className="home" style={{marginLeft: "20px",marginRight: "20px",marginBottom: "20px",width:"120px"}}>Submit a photo</button>
		</div></li>
 </ul>
    </nav>
        );
}
export default Header