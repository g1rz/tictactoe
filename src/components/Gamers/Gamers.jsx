import React from 'react';
import './Gamers.sass';

const Gamers = ({ users, activeUser }) => {
    return (
        <div className="gamers">
            <div className="gamers__title">Игроки</div>
            <ul className="gamers-list">
                {users.map((user) => (
                    <li className="gamers-list__item">
                        <div className="gamer">
                            {user.name} - <span className="icon">{user.type}</span>
                        </div>

                        {user.id === activeUser && <span class="gamer-active">ваш ход</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Gamers;
