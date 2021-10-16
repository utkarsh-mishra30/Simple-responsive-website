import React from "react";
// import lightening from "./lightening.mp4";
// import snowfall from "./snowfall.mp4";
// import suncloud from "./suncloud.mp4";
// import sunny from "./sunny.mp4";
// import { ReactVideo } from "reactjs-media";
const Randomvids = () => {
    return(
        <div className="home">
        <h2>This page shows Random videos</h2>
        {/* <div className="container">
        <ReactVideo className="video" loop autoPlay height="200" width="200"
                    src={lightening}
               
                // other props
            />
            <ReactVideo className="video" loop autoPlay height="200" width="200"
                src={snowfall}
               
                // other props
            />
            <ReactVideo className="video" loop autoPlay height="200" width="200"
                src={suncloud}
               
                // other props
            />
            <ReactVideo className="video" loop autoPlay height="200" width="500"
                src={sunny}
               
                // other props
            />
        </div> */}
        {/* <video width="320" height="240" autoPlay loop muted background-color="aqua" >
            <source src="lightening.mp4" type="video/mp4" />
        </video> */}
        <div className="container">
           
               <video loop autoPlay={true} muted height="300" width="500"  >
                   <source src="lightening.mp4" type="video/mp4" />
               </video>
               <video  autoPlay={true} loop muted height="300" width="500"    >
                   <source src="rain.mp4" type="video/mp4"/>
               </video>
               <video  autoPlay={true} loop muted height="300" width="500"   >
                   <source src="snow.mp4" type="video/mp4" />
               </video>
               <video loop autoPlay={true} muted height="300" width="500"  >
                   <source src="sunny.mp4" type="video/mp4" />
               </video>
           
        </div>
    </div>
    )
}

export default Randomvids;