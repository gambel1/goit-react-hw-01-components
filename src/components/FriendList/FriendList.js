import FriendListItem from './FriendListItem/FriendListItem';
import { FriendListBox, FriendListWrap } from './FriendList.styled';
import PropTypes from 'prop-types';

export default function FriendList(props) {
  const { friends } = props;
  return (
    <FriendListBox>
      <FriendListWrap>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        ))}
      </FriendListWrap>
    </FriendListBox>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
