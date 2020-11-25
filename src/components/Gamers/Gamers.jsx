import React from 'react';
import './Gamers.sass';

const Gamers = ({ users, activeUserID }) => {
    return (
        <div className="gamers">
            <div className="gamers__title">Игроки</div>
            <ul className="gamers-list">
                {users.map((user) => (
                    <li key={user.id} className="gamers-list__item">
                        <div className="gamer">
                            {user.name} - <span className="icon">{user.type}</span>
                        </div>

                        {user.id === activeUserID && <span className="gamer-active">ваш ход</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Gamers;
