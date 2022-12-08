import React, { useState } from "react";
const Displayimage=({image})=>{

const imglist=image.data&& image.data.results.map((item)=><div>{<img src={item.urls.small}/>}</div>)


return <div> displaying Image count: {image.data? image.data.results.length:image.length}

{imglist}


   
</div>
}
export default Displayimage