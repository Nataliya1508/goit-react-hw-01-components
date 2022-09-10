import { Profile } from './Profile/Profile';
import user from '../data/user.json';


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
    </>
  );
};