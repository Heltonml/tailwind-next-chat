import { useState } from 'react';

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
        setMsg('');
    };

    const handleSendMessage = (event) => {
        event.preventDefault();

        if (!msg) {
            alert('Message required!!!');
            return;
        }

        onNewMessage({
            authorName: 'Helton',
            message: msg
        });
    };

    const removeMessage = (index) => {
        if (index) {
            setMessages(messages.filter((el) => el.author + el.message !== index));
        }
    };

    const handleRemoveMessage = (e) => {
        removeMessage(e.target.name);
    };

    return (
        <>
            <section aria-labelledby="chat-title" className="lg:col-start-3 lg:col-span-1">
                <div className="px-4 py-5 shadow sm:rounded-lg sm:px-6">
                    <h2 id="chat-title" className="text-lg font-medium">
                        Chat messages ({messages.length})
                    </h2>
                </div>
                <div className="px-4 py-6 sm:px-6">
                    <ul className="space-y-8">
                        {messages.map((message, idx) => (
                            <li key={idx + 1} className="py-3 flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <div>
                                        <div className="text-sm">
                                            <a href="#" className="font-medium">
                                                {message.author}
                                            </a>
                                        </div>
                                        <div className="mt-1 text-sm">
                                            <p>{message.message}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                            name={message.author + message.message}
                                            type="button"
                                            className="ml-6 rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            onClick={(e) => handleRemoveMessage(e)}>
                                            Remove
                                            <span className="sr-only">{message.message}</span>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="px-4 py-6 shadow sm:rounded-lg sm:px-6">
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
            </section>
        </>
    );
};

export default ChatList;
