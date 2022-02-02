import { useEffect, useState } from 'react';

import Create from '../Create/Create';

import { getUsers, deleteUser } from '../../api';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getAllUsers = async () => {
        setLoading(true);
        try {
            const res = await getUsers();

            const data = await res;

            setUsers(data.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError("Some error occured");
        }
    };

    useEffect(() => {        
        getAllUsers();
    }, []);

    const handleDeleteUser = async (username) => {
        await deleteUser(username);

        getAllUsers();
    };

    return (
        <div>
            <Create getAllUsers={getAllUsers} />
            <h2 className="bg-purple-100 mt-12 py-2 pl-4 rounded-md font-medium">
                Users
            </h2>
            {loading ? (
                <h3>Loading...</h3>
            ) : error ? (
                <h3>{error}</h3>
            ) : (
                <div>
                    {users.map((user) => (
                        <div 
                            className="mt-8 pb-2 border-b border-purple-100 flex justify-evenly items-center" 
                            key={user._id}
                        >
                            <p className="border py-1 px-2 border-purple-800 bg-purple-800 text-white 
                            font-medium rounded-full mr-5 ml-2">
                                {user.name_prefix}
                            </p>
                            <p className="font-medium mr-20">{user.username}</p>
                            <p className="font-medium mr-36">{user.first_name} {user.last_name}</p>
                            <p className="font-medium ml-32">{user.date_of_birth}</p>
                            <svg onClick={() => handleDeleteUser(user.username)} class="w-5 h-5 ml-5
                            text-red-500 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" 
                            stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 
                            7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Users;
