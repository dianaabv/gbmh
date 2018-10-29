import React, { Component } from 'react';
import NavBar from './components/NavBar';
import VideosView from './components/VideosView';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


class App extends Component {
  render() {
    return (
        <div>
          <NavBar />
          <VideosView />
        </div>
    )
  }
}

export default App;
