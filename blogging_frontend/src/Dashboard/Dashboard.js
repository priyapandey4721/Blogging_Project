import React,{useState,useEffect} from 'react'
import {Container , AppBar , Typography , Grow , Grid} from '@material-ui/core'
import Posts from '../Components/Posts/Posts'
import Form from '../Components/Form/Form'
import {getPosts} from '../Actions/posts'
import useStyles from './Styles'
import { useDispatch } from 'react-redux'
import image from '../Images/blogging.png'
function Dashboard() {
    const [currentId,setCurrentId] =useState('')
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch])
  return (
    <Container maxWidth="lg">
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <Typography className={classes.heading} variant="h2" align='center'>Blogs</Typography>
            <img className={classes.image} src={image} alt='memories' height='60'/>
        </AppBar>
        <Grow in>
            <Container>
                <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs ={12} sm={7}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs ={12} sm={4}>
                            <Form currentId={currentId}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    </Container>
  )
}

export default Dashboard