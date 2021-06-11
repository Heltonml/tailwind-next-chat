import ThemeToggle from "../components/ThemeToogle";
import ChatList from '../components/ChatList';
import UserList from '../components/UserList';

const Home = () => {
    return (
        <>
            <div className="md:container md:mx-auto">
                <header>
                    <ThemeToggle />
                </header>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <ChatList />
                    </div>
                    <div>
                        <UserList />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
