import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { createUser } from '../../api';

const Create = ({ getAllUsers }) => {
    const [userData, setUserData] = useState({ first_name: '', last_name: '', username: '', date_of_birth: '' });
    const history = useHistory();

    const createNewUser = async () => {
        try {
            await createUser(userData);
        } catch (error) {
            console.log(error);
        }
    };

    const clear = () => {
        setUserData({ first_name: '', last_name: '', username: '', date_of_birth: '' });
        getAllUsers();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        createNewUser();
        history.push("/");
        clear();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-3 grid-rows-2 gap-5 pr-44">
                    <div className="col-span-1 col-start-1 col-end-1 row-span-1 row-start-1 row-end-1">
                        <label className="block mb-1 text-purple-800 font-medium">First Name</label>
                        <input 
                            type="text" 
                            placeholder="First Name"
                            required
                            className="outline-none w-full py-3 pl-3 border rounded-md border-purple-300"
                            value={userData.first_name}
                            onChange={(e) => setUserData({ ...userData, first_name: e.target.value })}
                        />
                    </div>
                    <div className="col-span-1 col-start-2 col-end-2 row-span-1 row-start-1 row-end-1">
                        <label className="block mb-1 text-purple-800 font-medium">Last Name</label>
                        <input 
                            type="text" 
                            placeholder="Last Name"
                            required
                            className="outline-none w-full py-3 pl-3 border rounded-md border-purple-300"
                            value={userData.last_name}
                            onChange={(e) => setUserData({ ...userData, last_name: e.target.value })}
                        />
                    </div>
                    <div className="col-span-1 col-start-1 col-end-1 row-span-1 row-start-2 row-end-2">
                        <label className="block mb-1 text-purple-800 font-medium">Username</label>
                        <input 
                            type="text" 
                            placeholder="Username"
                            required
                            className="outline-none w-full py-3 pl-3 border rounded-md border-purple-300"
                            value={userData.username}
                            onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                        />
                    </div>
                    <div className="col-span-1 col-start-2 col-end-2 row-span-1 row-start-2 row-end-2">
                        <label className="block mb-1 text-purple-800 font-medium">Date of Birth</label>
                        <input 
                            type="date"
                            required
                            className="block outline-none w-full py-3 pl-3 border rounded-md border-purple-300"
                            value={userData.date_of_birth}
                            onChange={(e) => setUserData({ ...userData, date_of_birth: e.target.value })}
                        />
                    </div>
                    <div className="col-span-1 col-start-3 col-end-3 row-span-1 row-start-1 row-end-1">
                        <button className="text-center mt-7 py-3 border rounded-md border-purple-800 bg-purple-800 
                        text-white w-full">
                            SUBMIT
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Create;
