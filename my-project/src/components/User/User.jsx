import { useParams } from "react-router-dom";

// import a lib hook from react-rotuer-dom
export default function User() {
   const { id } = useParams();
   return <h1 className="bg-slate-200 text-center text-3xl py-4">User: {id}</h1>;
}
