import { useEffect, useState } from 'react';

import Create from '../Create/Create';

import { getUsers, deleteUser } from '../../api';

import trashSvg from "../../images/trash.svg";

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
                            className="mt-8 pb-2 border-b border-purple-100 flex justify-between items-center" 
                            key={user._id}
                        >
                            <div className="ml-5">
                                <p className="border p-1 border-purple-800 bg-purple-800 text-white 
                                font-medium rounded-full">
                                    {user.name_prefix}
                                </p>
                            </div>
                            <div>
                                <p className="font-medium">
                                    {user.username}
                                </p>
                            </div>
                            <div className="ml-10">
                                <p className="font-medium">
                                    {user.first_name} {user.last_name}
                                </p>
                            </div>
                            <div className="ml-72">
                                <p className="font-medium">
                                    {user.date_of_birth}
                                </p>
                            </div>
                            <div className="mr-3">
                                <img 
                                    src={trashSvg} 
                                    alt="trash-icon" 
                                    class="w-5 h-5 cursor-pointer"
                                    onClick={() => handleDeleteUser(user.username)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Users;
