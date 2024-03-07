/* eslint-disable react/prop-types */
import FriendListItem from "./FriendListItem";
import './FriendList.css';

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(({ id, name, avatar, isOnline }) => {
                return (
                    <li key={id} className="friend-card">
                        <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
                    </li>
                )
            })}
        </ul>
    )
}

export default FriendList;