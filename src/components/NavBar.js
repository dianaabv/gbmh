import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


class App extends Component {
  render() {
    return (
              <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                Best Videos of The Months
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
  }
}

export default App;
