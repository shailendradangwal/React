import React, { useState } from "react";
import desChild from "./childApi.js" ;




    const childData = () => {
    const[child, setChild] = useState(desChild);
    console.log(childData);


   
    return (
       <>
            {
                desChild.map((curElem) => {
                    return (
                        <div id={curElem.id} className="w-full m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="/">
                           <img src={curElem.image} />
                        </a>
                        <div className="px-5 mt-3 pb-5">
                            <a href="/">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    {curElem.name}
                                </h5>
                            </a>
                            <div className="flex items-center justify-between  mt-2.5 mb-5  text-gray-900 dark:text-white">
                                <div>{curElem.class}</div>
                                <div>{curElem.occassion}</div>
                            </div>
                            <div className="flex items-center  text-gray-900 dark:text-white">
                                {curElem.description}
                            </div>
                        </div>
                        </div>   
                    )
                })
            }
                  
       </>
    );

}
export default childData;
