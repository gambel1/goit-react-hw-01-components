import { ProfileBox, ProfileBoxImg, Stats, StatsList } from './Profile.styled';
import PropTypes from 'prop-types';
export default function Profile(props) {
  const {
    ImageSrc,
    userName,
    tag,
    location,
    stats: { followers, views, likes },
  } = props;

  return (
    <ProfileBox>
      <div class="description">
        <ProfileBoxImg src={ImageSrc} alt="User Name" class="avatar" />
        <p class="name">{userName}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <Stats>
        <StatsList>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </StatsList>
        <StatsList>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </StatsList>
        <StatsList>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </StatsList>
      </Stats>
    </ProfileBox>
  );
}

Profile.propTypes = {
  ImageSrc: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.arrayOf(
    PropTypes.shape({
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ),
};
