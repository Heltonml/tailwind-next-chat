import { useState } from 'react';
import { HiPlus } from "react-icons/hi";

const UserList = () => {
    const [uid, setUid] = useState(1);
    const [users, setUsers] = useState([]);

    const onNewAuthor = (author) => {
        setUsers([...users, { name: author }]);
    };

    const handleNewAuthor = () => {
        onNewAuthor(`Author ${uid}`);
        setUid(uid + 1);
    }

    const handleRemoveAuthor = (e) => {
        const name = e.target.name;
        setUsers(users.filter(el => el.name !== name));
    };

    return (
        <>
            <section aria-labelledby="timeline-title" className="lg:col-start-3 lg:col-span-1">
                <div className="px-4 py-5 shadow sm:rounded-lg sm:px-6">
                    <h2 id="timeline-title" className="text-lg font-medium">
                        User list ({users.length})
                    </h2>
                </div>
                <div className="mt-6 flow-root">
                    <ul className="mt-6 divide-y">
                        {users.map((user, idx) => (
                            <li key={idx + 1} className="py-3 flex justify-between items-center">
                                <div className="flex items-center">
                                    <img src={`https://picsum.photos/200/300`} alt="" className="w-8 h-8 rounded-full" />
                                    <p className="ml-4 text-sm font-medium">{user.name}</p>
                                </div>
                                <button
                                    type="button"
                                    name={user.name}
                                    className="ml-6 rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={handleRemoveAuthor}>
                                    Remove<span className="sr-only"> {user.name}</span>
                                </button>
                            </li>
                        ))}
                        <div className="px-4 py-6 shadow sm:rounded-lg sm:px-6">
                            <li className="py-2 flex justify-between items-center">
                                <button
                                    type="button"
                                    onClick={handleNewAuthor}
                                    className="group -ml-1 bg-transparent p-1 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    <span className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 dark:border-gray-500 dark:text-purple-400">
                                        <HiPlus className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    <span
                                        className="ml-4 text-sm font-medium group-hover:text-indigo-400">
                                        Add new user
                                </span>
                                </button>
                            </li>
                        </div>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default UserList;
