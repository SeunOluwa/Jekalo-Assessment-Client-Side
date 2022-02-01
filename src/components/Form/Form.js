import { useState } from 'react';

import { createUser } from '../../api';

const Form = () => {
    const [userData, setUserData] = useState({ first_name: '', last_name: '', username: '', date_of_birth: '' });

    const createNewUser = async () => {
        try {
            await createUser(userData);
        } catch (error) {
            console.log(error);
        }
    };

    const clear = () => {
        setUserData({ first_name: '', last_name: '', username: '', date_of_birth: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        createNewUser();
        clear();
    };

    return (
        <div className="flex">
            <form onSubmit={handleSubmit}>
                <label className="block mb-1 text-purple-800 font-bold">First Name</label>
                <input 
                    type="text" 
                    placeholder="First Name"
                    required
                    className="outline-none py-3 pl-3 mr-4 border rounded border-purple-300"
                    value={userData.first_name}
                    onChange={(e) => setUserData({ ...userData, first_name: e.target.value })}
                />
                <label className="block mb-1 text-purple-800 font-bold">Last Name</label>
                <input 
                    type="text" 
                    placeholder="Last Name"
                    required
                    className="outline-none py-3 pl-3 mr-4 border rounded border-purple-300"
                    value={userData.last_name}
                    onChange={(e) => setUserData({ ...userData, last_name: e.target.value })}
                />
                <label className="block mb-1 text-purple-800 font-bold">Username</label>
                <input 
                    type="text" 
                    placeholder="Username"
                    required
                    className="outline-none py-3 pl-3 mr-4 border rounded border-purple-300"
                    value={userData.username}
                    onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                />
                <label className="block mb-1 text-purple-800 font-bold">Date of Birth</label>
                <input 
                    placeholder="DD-MM-YYYY"
                    required
                    className="block outline-none py-3 pl-3 mr-4 border rounded border-purple-300"
                    value={userData.date_of_birth}
                    onChange={(e) => setUserData({ ...userData, date_of_birth: e.target.value })}
                />
                <button className="text-center mt-4 py-3 border rounded border-purple-800 bg-purple-800 
                text-white w-full">
                    SUBMIT
                </button>
            </form>
        </div>
    );
}

export default Form;
