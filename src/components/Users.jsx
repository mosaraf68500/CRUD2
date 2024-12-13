
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {

    const loadedusers=useLoaderData()
    const [users,setusers]=useState(loadedusers)

    console.log(users)

    const delteuser=(_id)=>{
        console.log(_id)

        fetch(`http://localhost:5000/users/${_id}`,{

            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount>0){
                alert('deleted successfull')
                const remaining=users.filter(user=>user._id!==_id)
                setusers(remaining)
            }
        })

    }

    return (
        <div>
        <h1>the number of users is : {users.length}</h1>
        <div>
            {
                users.map(user =><p key={user._id}> {user.name}: {user.email}

                <Link>
                    <button to={`/update/${user._id}`}>Update</button>
                </Link>
                
                
                 <button onClick={()=>delteuser(user._id)}> X</button> </p>)
            }

        </div>
            
        </div>
    );
};

export default Users;