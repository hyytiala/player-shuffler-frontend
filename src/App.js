import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'
import AppBar from './components/AppBar'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

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
