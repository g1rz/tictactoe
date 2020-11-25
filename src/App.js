import React from 'react';

import './App.sass';
import Board from './components/Board/Board.js';
import Gamers from './components/Gamers/Gamers.jsx';

function App() {
    const users = [
        {
            id: 1,
            name: 'Игрок 1',
            type: 'X',
        },
        {
            id: 2,
            name: 'Игрок 2',
            type: '0',
        },
    ];

    const [activeUserID, setActiveUserID] = React.useState(users[0].id);

    const changeActiveUser = (id) => {
        setActiveUserID(id);
    }

    return (
        <div className="App">
            <div className="container">
                <div className="row row--space-b">
                    <Gamers users={users} activeUserID={activeUserID} />
                    <Board size={3} users={users} activeUserID={activeUserID} changeActiveUser={changeActiveUser}/>
                </div>
            </div>
        </div>
    );
}

export default App;
