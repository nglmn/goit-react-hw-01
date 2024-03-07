import './App.css';
import Profile from './Profile';
import userData from '../userData.json';
import friendsData from '../friendsData.json';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import transactionData from '../transactions.json';

const App = () => {
  const { username, tag, location, avatar, stats } = userData;
  return (
    <div className='container'>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionData} />
    </div>
  );
};

export default App;