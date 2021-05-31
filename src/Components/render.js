import React from 'react';
function Render(props){
    return(
        <div className="image-item">
            <img src={props.photos.urls.regular} />
            <div className="containerimg">
                <img src={props.photos.user.profile_image.small} className="imgcls" />
                <p className="para1">{props.photos.user.username}</p>
            </div>
            <div className="icondiv">
                <button className="iconbtn"><i className='fas fa-arrow-down'></i>
                </button>
                <button className="iconbtn2"><i className="fa fa-heart"></i></button>
                <button className="iconbtn3"><i className="fa fa-plus"></i></button>
            </div>
        </div>
    )
}
export default Render