import { useLoaderData } from "react-router-dom";

export default function Github() {
   const data = useLoaderData();

   // the perk of using loader instead of using useeffect is that when we reduce the slight lag from
   // api calls since when the mouse hovers over a link that may call a potential api , it fires the api call way before the click happens.

   // const [data, setData] = useState({});
   // useEffect(() => {
   //    fetch("https://api.github.com/users/saif-gitreps")
   //       .then((result) => result.json())
   //       .then((data) => {
   //          console.log(data);
   //          setData(data);
   //       });
   // }, []);
   return (
      <div className="text-center m-4 bg-gray-100 text-gray-800 p-4 text-3xl flex items-center justify-center">
         <div className="text-center flex justify-center w-28 ">
            <img src={data.avatar_url} alt="github-avatar" className="rounded-full " />
         </div>
         <h1>Github followers: {data.followers}</h1>
      </div>
   );
}
