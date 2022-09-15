import React from 'react';

import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import {FriendListItem} from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>
            {friends.map(data => (
                <FriendListItem
                    key={data.id}
                    avatar={data.avatar}
                    name={data.name}
                    isOnline={data.isOnline}
                />
            ))}
        </ul>
    );
};



FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};