import React, {useState,useEffect} from 'react';
import key from './keys';
import Render from './render';
function Imagecontainer(){
    const [photos,setPhotos]=useState([]);
    const infiniteScroll = () => {
        fetch(`${key.apiRoot}/photos/?client_id=${key.accessKey}&page=1`)
          .then((res) => {
          return res.json();
        })
          .then(data => {

         setPhotos(data);
      
        })
      };
      useEffect(infiniteScroll,[]);
      const data = photos.map(photo =>{
        return(
            <Render photos={photo} key={photo.id}/>
        )
        })
        console.log(photos);
        return(
            <div className="container">
                <div className="image-grid" id="imagediv">
                    {data}
                </div>
            </div>
        );
}
export default Imagecontainer
