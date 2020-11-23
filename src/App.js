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

    const [activeUser, setActiveUser] = React.useState(users[0].id);

    return (
        <div className="App">
            <div className="container">
                <div className="row row--space-b">
                    <Gamers users={users} activeUser={activeUser} />
                    <Board size={3} users={users} activeUser={activeUser} />
                </div>
            </div>
        </div>
    );
}

export default App;
