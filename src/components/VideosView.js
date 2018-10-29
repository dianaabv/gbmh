import React, { Component } from 'react';
import axios from 'axios';

import Video from './Video'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
          videos: [],
          videos_old: [],
          search_items: []
        }
        this.onSearchInputChange=this.onSearchInputChange.bind(this);
    }
    //request for data
    componentDidMount(){
    console.log('hidden message from Diana :)')
    // request for best vids
    axios.get('https://api.vimeo.com/channels/bestofthemonth/videos',
          {
            headers: {'Authorization': 'bearer 57930b58a1a128c6c01489efd1ab3163'}
          })
    .then(res => {
          this.setState({
           videos: res.data.data,
           search_items: res.data.data
          });
    })
    .catch(function (error) {
        console.log(error);
    });
  }
  //for input search
  onSearchInputChange(event){
     console.log("Search changed ..." + event.target.value)
        var updatedList = this.state.videos;
        updatedList = updatedList.filter(function(item){
          return item.name.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
        if(updatedList.length!=0){
          this.setState({search_items:updatedList})
        } else{
          this.setState({search_items: this.state.videos})
        }
  }
  render() {
    return (
      <div>
 
        { this.state.search_items ? (
                    <div>
              <TextField style={{padding: 24}}
                                        id="searchInput"
                                        placeholder="Search for Videos"   
                                        margin="normal"
                                        onChange={this.onSearchInputChange}
                                        />
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.search_items.map((currentVid, i)=> (
                                <Grid item key={i} xs={12} sm={6} lg={4} xl={3}>
                                    <Video  video={currentVid} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : (<div><p>I'm searching</p></div>) }
                    </div>

    )
  }
}

export default App;
