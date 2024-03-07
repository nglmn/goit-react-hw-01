/* eslint-disable react/prop-types */
import './FriendListItem.css';

const FriendListItem = ({ avatar, name, isOnline }) => {

    return (
        <div className='card-wrapper'>
            <img src={avatar} alt="Avatar" width="100" height="100" />
            <p className='friend-name'>{name}</p>
            {isOnline ? <p className='friend-status online'>{String(isOnline)}</p> :
                <p className='friend-status offline'>{String(isOnline)}</p>}
        </div>
    )
}

export default FriendListItem;