import { useLoaderData } from "react-router-dom";


const Update = () => {

    const updateloader=useLoaderData();
    return (
        <div>
        <h1>update information of date is :{updateloader.email}</h1>
            
        </div>
    );
};

export default Update;