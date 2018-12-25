import React from 'react'
import AppBar from './components/AppBar'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
    return (
        <Router>
            <div>
                <AppBar/>
            </div>
        </Router>
    );
}


export default App;
