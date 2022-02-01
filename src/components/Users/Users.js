import { useEffect, useState } from 'react';

import { getUsers } from '../../api';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getAllUsers = async () => {
            setLoading(true);
            try {
                const res = await getUsers();

                const data = await res;
                console.log(data.data);

                setUsers(data.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError("Some error occured");
            }
        };

        getAllUsers();
    }, []);

    return (
        <div>
            <h2>Users</h2>
            {loading ? (
                <h3>Loading...</h3>
            ) : error ? (
                <h3>{error}</h3>
            ) : (
                <div>
                    {users.map((user) => (
                        <div key={user._id}>
                            <p>{user.name_prefix}</p>
                            <span>{user.username}</span>
                            <span>{user.first_name} {user.last_name}</span>
                            <span>{user.date_of_birth}</span>
                            <button onClick={}>Delete</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Users;
