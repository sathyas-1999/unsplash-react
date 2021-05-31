import React from 'react';
import Imagebar from './Imagebar';
import Imagecontainer from './Imagecontainer';
function Headersearch(props){
  return(
    <div>
    <Imagebar query={props.query}/>
    <Imagecontainer/>
    </div>
  )
}
export default Headersearch