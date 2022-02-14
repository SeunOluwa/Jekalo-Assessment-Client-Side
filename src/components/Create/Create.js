import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { createUser } from '../../api';

const Create = ({ getAllUsers }) => {
    const [userData, setUserData] = useState({ 
        first_name: '', 
        last_name: '', 
        username: '', 
        date_of_birth: '' 
    });
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
                <div className="lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-5 lg:pr-32 xl:pr-44">
                    <div className="lg:col-span-1 lg:col-start-1 lg:col-end-1 lg:row-span-1 
                    lg:row-start-1 lg:row-end-1">
                        <label className="block mb-1 text-purple-800 font-medium">First Name</label>
                        <input 
                            type="text" 
                            placeholder="First Name"
                            required
                            className="outline-none w-full py-3 pl-3 mb-3 border rounded-md 
                            border-purple-300"
                            value={userData.first_name}
                            onChange={(e) => setUserData({ ...userData, first_name: e.target.value })}
                        />
                    </div>
                    <div className="lg:col-span-1 lg:col-start-2 lg:col-end-2 lg:row-span-1 
                    lg:row-start-1 lg:row-end-1">
                        <label className="block mb-1 text-purple-800 font-medium">Last Name</label>
                        <input 
                            type="text" 
                            placeholder="Last Name"
                            required
                            className="outline-none w-full py-3 pl-3 mb-3 border rounded-md 
                            border-purple-300"
                            value={userData.last_name}
                            onChange={(e) => setUserData({ ...userData, last_name: e.target.value })}
                        />
                    </div>
                    <div className="lg:col-span-1 lg:col-start-1 lg:col-end-1 lg:row-span-1 
                    lg:row-start-2 lg:row-end-2">
                        <label className="block mb-1 text-purple-800 font-medium">Username</label>
                        <input 
                            type="text" 
                            placeholder="Username"
                            required
                            className="outline-none w-full py-3 pl-3 mb-3 border rounded-md 
                            border-purple-300"
                            value={userData.username}
                            onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                        />
                    </div>
                    <div className="lg:col-span-1 lg:col-start-2 lg:col-end-2 lg:row-span-1 
                    lg:row-start-2 lg:row-end-2">
                        <label className="block mb-1 text-purple-800 font-medium">Date of Birth</label>
                        <input 
                            type="date"
                            required
                            className="block outline-none w-full py-3 pl-3 mb-3 border rounded-md 
                            border-purple-300"
                            value={userData.date_of_birth}
                            onChange={(e) => setUserData({ ...userData, date_of_birth: e.target.value })}
                        />
                    </div>
                    <div className="lg:col-span-1 lg:col-start-3 lg:col-end-3 lg:row-span-1 
                    lg:row-start-1 lg:row-end-1">
                        <button className="text-center mt-7 py-3 border rounded-md border-purple-800 
                        bg-purple-800 text-white w-full">
                            SUBMIT
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Create;
