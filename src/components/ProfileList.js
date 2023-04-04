import Profile from './Profile';
import PropTypes from 'prop-types';
export default ProfileList;

function ProfileList({ items }) {
  return (
    <div>
      <Profile
        ImageSrc={avatar}
        alt={username}
        title={username}
        tag={tag}
        location={location}
        followers={followers}
        Views={views}
        Likes={likes}
      />
    </div>
  );
}


// ProfileList.PropTypes = {
//     items: PropTypes.arrayOf(PropTypes.shape({
        
//     }))
// };
