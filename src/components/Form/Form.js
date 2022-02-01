const Form = () => {
    return (
        <div className="flex">
            <form>
                <label className="block mb-1 text-purple-800 font-bold">First Name</label>
                <input 
                    type="text" 
                    placeholder="First Name"
                    required
                    className="outline-none py-3 pl-3 mr-4 border rounded border-purple-300"
                />
                <label className="block mb-1 text-purple-800 font-bold">Last Name</label>
                <input 
                    type="text" 
                    placeholder="Last Name"
                    required
                    className="outline-none py-3 pl-3 mr-4 border rounded border-purple-300"
                />
                <label className="block mb-1 text-purple-800 font-bold">Username</label>
                <input 
                    type="text" 
                    placeholder="Username"
                    required
                    className="outline-none py-3 pl-3 mr-4 border rounded border-purple-300"
                />
                <label className="block mb-1 text-purple-800 font-bold">Date of Birth</label>
                <input 
                    type="date" 
                    required
                    className="block outline-none py-3 pl-3 mr-4 border rounded border-purple-300"
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
