import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import Profile from 'components/profile/Profile';
import Statistics from 'components/statistics/Statistics';
import FriendList from 'components/friendList/FriendList';
import TransactionHistory from 'components/transactions/Transactions.jsx';

export const App = () => {
  return (
    <div>
      <Profile
      {...user}
    />
    <Statistics
        statistics={data}
        title="Upload stats"
      />
      
      <FriendList
        friends={friends}
      />;
      <TransactionHistory
        items={transactions}
      />;
      
        
    </div>
    
  );
};




