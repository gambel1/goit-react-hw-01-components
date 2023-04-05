import Profile from "./Profile";
import user from '../user.json';

export default function ProfileList() {
  return (
    <div>
      <Profile
        ImageSrc={user.avatar}
        alt={user.username}
        title={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.followers}
        Views={user.views}
        Likes={user.likes}
      />
    </div>
  );
}