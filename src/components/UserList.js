import { useState } from 'react';
import { VscClearAll } from 'react-icons/vsc';
import { HiPlus } from "react-icons/hi";

const UserList = () => {
    const [author, setAuthor] = useState({});
    const [users, setUsers] = useState([]);

    return (
        <>
            <section aria-labelledby="timeline-title" className="lg:col-start-3 lg:col-span-1">
                <div className="bg-white dark:bg-gray-900 px-4 py-5 shadow sm:rounded-lg sm:px-6">
                    <div className="mt-3 flex justify-end">
                        <button type="button"
                            className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                            onClick="">
                            <VscClearAll />
                        </button>
                    </div>
                    <h2 id="timeline-title" className="text-lg font-medium text-gray-700 dark:text-purple-400">
                        User list ({users.length})
                    </h2>
                </div>
                <div className="mt-6 flow-root">
                    <ul className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                        {users.map((user, idx) => (
                            <li key={idx + 1} className="py-3 flex justify-between items-center">
                                <div className="flex items-center">
                                    <img src={``} alt="" className="w-8 h-8 rounded-full" />
                                    <p className="ml-4 text-sm font-medium text-gray-900">{user.name}</p>
                                </div>
                                <button
                                    type="button"
                                    className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Remove<span className="sr-only"> {user.name}</span>
                                </button>
                            </li>
                        ))}
                        <li className="py-2 flex justify-between items-center">
                            <button
                                type="button"
                                onClick={() => { console.log(`click`); }}
                                className="group -ml-1 bg-transparent p-1 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                <span className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 dark:border-gray-500 dark:text-purple-400">
                                    <HiPlus className="h-5 w-5" aria-hidden="true" />
                                </span>
                                <span
                                    className="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                                    Add new user
                                </span>
                            </button>
                        </li>
                    </ul>

                </div>
            </section>
        </>
    );
};

export default UserList;
