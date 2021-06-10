import { useState } from 'react';
import { VscClearAll } from 'react-icons/vsc';

const ChatList = () => {
    const [author, setAuthor] = useState({});
    const [msg, setMsg] = useState('');
    const [messages, setMessages] = useState([]);

    const onNewMessage = ({ authorName, message }) => {
        const newMessage = {
            author: authorName,
            message
        };
        setMessages([...messages, newMessage]);
    };

    const handleSendMessage = (event) => {
        event.preventDefault()

        if (!msg) {
            alert('Message required!!!');
            return;
        }

        onNewMessage({
            authorName: 'Helton',
            message: msg
        });
    };

    const cleanMessages = () => {
        setMessages([]);
    }

    return (
        <>
            <section aria-labelledby="chat-title">
                <div className="bg-white dark:bg-gray-900 shadow sm:rounded-lg sm:overflow-hidden">
                    <div className="divide-y divide-gray-200 dark:divide-gray-800">
                        <div className="px-4 py-5 sm:px-6">
                            <div className="mt-3 flex justify-end">
                                <button type="button"
                                    className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                                    onClick={cleanMessages}>
                                    <VscClearAll />
                                </button>
                            </div>
                            <h2 id="chat-title" className="text-lg font-medium text-gray-900 dark:text-purple-400">
                                Chat messages ({messages.length})
                            </h2>
                        </div>
                        <div className="px-4 py-6 sm:px-6">
                            <ul className="space-y-8">
                                {messages.map((message, idx) => (
                                    <li key={idx + 1}>
                                        <div className="flex space-x-3">
                                            <div>
                                                <div className="text-sm">
                                                    <a href="#" className="font-medium text-gray-900 dark:text-purple-600">
                                                        {message.author}
                                                    </a>
                                                </div>
                                                <div className="mt-1 text-sm text-gray-700 dark:text-purple-400">
                                                    <p>{message.message}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6">
                        <div className="flex space-x-3">
                            <div className="min-w-0 flex-1">
                                <form action="#" onSubmit={handleSendMessage}>
                                    <textarea
                                        id="comment"
                                        name="comment"
                                        rows={3}
                                        className="shadow-sm block p-4 w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Leave a message"
                                        value={msg}
                                        onChange={(e) => setMsg(e.target.value)} />
                                    <div className="mt-3 flex justify-end">
                                        <button
                                            type="submit"
                                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                            Send message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChatList;
