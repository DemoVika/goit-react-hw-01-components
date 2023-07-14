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
      //   username={user.username}
      //   tag={user.tag}
      //   location={user.location}
      //   avatar={user.avatar}
      // stats={user.stats}
      {...user}
    />
    <Statistics
        statistics={data}
        title="Upload stats"
      />
      {/* <Statistics title="Upload stats" stats={data} />
       <Statistics stats={data} /> */}
      
      <FriendList
        friends={friends}
      />;
      <TransactionHistory
        items={transactions}
      />;
      
        
    </div>
    
  );
};




