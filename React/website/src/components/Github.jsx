import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data=useLoaderData()
    //const [data, setData] = useState(0)
   //useEffect(() => {
    //    fetch('https://api.github.com/users/Rija-Arzoo')
    //        .then(response => response.json())
    //        .then(data => {
    //            setData(data)
    //        })
    //}, []) 

    return (
        <div className="flex flex-col justify-center items-center gap-4 m-4 bg-gray-600 text-white p-4 text-3xl">Github followers:{data.followers}
            <img src={data.avatar_url} alt="Profile-picture" width={300} />
        </div>
    )

}
export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Rija-Arzoo')
    return response.json()
}