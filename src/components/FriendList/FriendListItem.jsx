import React from 'react';

import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

 export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={styles.item}>
            <span
            className={isOnline ? styles.statusOn : styles.statusOff}
            ></span>
            <img
            className={styles.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
            />
              <p className={styles.name}>{name}</p>
        </li>
  );
 };

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};