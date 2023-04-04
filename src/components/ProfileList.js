import Profile from './Profile';
// import PropTypes from 'prop-types';
export default ProfileList;

function ProfileList({ items }) {
  return (
    <div>
      <Profile
        ImageSrc={items.avatar}
        alt={items.username}
        title={items.username}
        tag={items.tag}
        location={items.location}
        followers={items.followers}
        Views={items.views}
        Likes={items.likes}
      />
    </div>
  );
}


// ProfileList.PropTypes = {
//     items: PropTypes.arrayOf(PropTypes.shape({
        
//     }))
// };
