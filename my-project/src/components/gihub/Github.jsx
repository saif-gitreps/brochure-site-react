import { useState, useEffect } from "react";

export default function Github() {
   const [data, setData] = useState({});
   useEffect(() => {
      fetch("https://api.github.com/users/saif-gitreps")
         .then((result) => result.json())
         .then((data) => {
            console.log(data);
            setData(data);
         });
   }, []);
   return (
      <div className="text-center m-4 bg-gray-100 text-gray-800 p-4 text-3xl flex items-center justify-center">
         <div className="text-center flex justify-center w-28 ">
            <img src={data.avatar_url} alt="github-avatar" className="rounded-full " />
         </div>
         <h1>Github followers: {data.followers}</h1>
      </div>
   );
}
