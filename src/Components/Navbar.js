import React from 'react';
import {useHistory} from 'react-router-dom';
function Navbar(props){
        let history=useHistory();
        const Navsearch=(e)=>{
          console.log(e.target.innerText);
          props.query(e.target.innerText);
          history.push('/search');
        }
        return(
            <div className="category-nav" style={{width:"100vw",overflowX:"scroll"}}>
            <div className="category">
              <a style={{cursor:"pointer"}} href='/'>Editorial</a>
            </div>
            <div className="category">
              <button className="wall" onClick={Navsearch}>Wallpapers</button>
            </div>
            <div className="category">
              <button className="texture" onClick={Navsearch}>Texture and Patterns</button>
            </div>
            <div className="category">
              <button className="nature" onClick={Navsearch}>Nature</button>
            </div>
            <div className="category">
              <button className="current-events" onClick={Navsearch}>Current Events</button>
            </div>
            <div className="category">
              <button className="architect" onClick={Navsearch}>Architecture</button>
            </div>
            <div className="category">
              <button className="business" onClick={Navsearch}>Business and Work</button>
            </div>
            <div className="category">
              <button className="film" onClick={Navsearch}>Film</button>
            </div>
            <div className="category">
              <button className="animals" onClick={Navsearch}>Animals</button>
            </div>
            <div className="category">
              <button className="travel" onClick={Navsearch}>Travel</button>
            </div>
            <div className="category">
              <button className="fashion" onClick={Navsearch}>Fashion</button>
            </div>
            <div className="category">
              <button className="food" onClick={Navsearch}>Food and Drink</button>
            </div>
            <div className="category">
              <button className="spirituality" onClick={Navsearch}>Spirituality</button>
            </div>
          </div>

        );
}
export default Navbar