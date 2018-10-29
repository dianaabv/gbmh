import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
const Video = (props) => {
    return(
             <div>
            { props.video ? (
                <Card >
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                    image={props.video.pictures.sizes[0].link}
                    title={props.video.name}
                    />
                     <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                                      {props.video.name}
                                  </Typography>
                                  <Typography component="p">
                                      {props.video.description}
                                  </Typography>
                                  </CardContent>
                                  <CardActions>
                                  <Button size="small" color="primary" href={props.video.link} target="_blank">
                                      Check this out
                                  </Button>
                                  </CardActions>
                             
                </Card>
            ) : null}
        </div>
    )
}
export default Video;