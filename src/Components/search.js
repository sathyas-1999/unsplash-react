import React, {useState,useEffect} from 'react';
import key from './keys';
import Render from './render';
function Search(props){
    const [photos,setPhotos]=useState([]);
    const[query,setquery]=useState("");
    useEffect(()=>{
        setquery(props.x)
    },
    [props.x])
    const infiniteScroll = () => {
        fetch(`${key.apiRoot}/search/photos/?client_id=${key.accessKey}&query=${props.x}}&page=1`)
        .then((res) => {
          return res.json();
        })
          .then(data => {
              console.log(props.x);
            console.log(data.results);
         setPhotos(data.results);
      
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
export default Search
