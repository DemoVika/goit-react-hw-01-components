import user from 'user.json';
import Profile from '../Profile';
import Statistics from 'Statistics';

export const App = () => {
  return (
    <Profile
      //   username={user.username}
      //   tag={user.tag}
      //   location={user.location}
      //   avatar={user.avatar}
      // stats={user.stats}
      {...user}
    />
    // <Statistics
    //   //   username={user.username}
    //   //   tag={user.tag}
    //   //   location={user.location}
    //   //   avatar={user.avatar}
    //   // stats={user.stats}
    //   {...data}
    // />
  );
};



