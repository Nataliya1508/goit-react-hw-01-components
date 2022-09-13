import { Profile } from './Profile/Profile';
import user from '../data/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';

import { FriendList } from './FriendList/FriendList';
import friendList from '../data/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';


export const App = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <>
      <>
        <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
      </>
       <>
        <Statistics title="Upload stats" stats={data} />
      </>

      <>
        <FriendList friends={friendList} />
      </>

 <>
        <TransactionHistory items={transactions} />
      </>
    </>
  );
};