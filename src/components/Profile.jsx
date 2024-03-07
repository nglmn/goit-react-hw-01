/* eslint-disable react/prop-types */
import './Profile.css';

const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
    return (
        <div className="user-card-wrapper">
            <div className='user-info'>
                <img className="user-pic" src={image} alt={name} width="200" height="200" />
                <h1 className='name'>{name}</h1>
                <p className='tag-loc'>@{tag}</p>
                <p className='tag-loc'>{location}</p>
            </div>
            <ul className='data-list'>
                <li className='data-item'>
                    <span className='data-name'>Followers</span>
                    <span className='data-count'>{followers}</span>
                </li>
                <li className='data-item'>
                    <span className='data-name'>Views</span>
                    <span className='data-count'>{views}</span>
                </li>
                <li className='data-item'>
                    <span className='data-name'>Likes</span>
                    <span className='data-count'>{likes}</span>
                </li>
            </ul>
        </div>
    )
};

export default Profile;