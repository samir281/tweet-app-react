import {   FaUserSecret} from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Container, Card,Row, Col,Modal, Table, ModalHeader, ModalBody,} from "react-bootstrap";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { useState } from "react";
let comments=[]
const MytweetList = (props)=> {
  let[comment,setComments]=useState(comments)
  let[showComment,setShowComment]=useState(false);
  const hideShowComment=()=>setShowComment(false);
    function DeletHandler(){
        console.log(props.tweet.id);
        props.deletTweet(props.tweet.username,props.tweet.id)
    }
    function UpdateHandler()
    {
      props.updateTweet(props.tweet.username,props.tweet.id,props.tweet.descip)
    }
    function CommentHandler()
    {
      fetch(`getallreply/${props.tweet.id}`,{
          method: 'GET',
      }).then(res=>{
        return res.json()
      }).then(data=>{
        comment=data;
        setComments(comment);
      })
      setShowComment(true)
      console.log(comment)
    }
    return(
        <div>
        <Container>
            <Card>
                    <Card.Body>
                            <>
                                <FaUserSecret className='m-1' />
                                        <b>{props.tweet.username}</b>
                            </>
                            <Card.Text key={props.tweet.id}>{props.tweet.descip}</Card.Text>
                    </Card.Body>
                        <Card.Footer>Tweet Post Time :{props.tweet.date}</Card.Footer>
                        <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          '& > *': {
                            m: 1,
                          },
                        }}
                      >
                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button color='warning' onClick={DeletHandler}> <DeleteForeverIcon/></Button>
                        <Button onClick={UpdateHandler} >Update your Tweet!! </Button>
                        <Button onClick={CommentHandler} ><CommentRoundedIcon/></Button>
                        <Fab disabled aria-label="like">
                            <FavoriteIcon />
                        </Fab>
                      </ButtonGroup>
                      </Box>
            </Card>
            <Modal show={showComment}>
            <ModalHeader>
            <Button onClick={hideShowComment}><CloseFullscreenIcon/></Button>
            </ModalHeader>
            <ModalBody>
              <Table>
                                <thead>
                                    <tr>
                                        <th>TweetId</th>
                                        <th>Reply</th>
                                        <th>Time Published</th>
                                    </tr>
                                </thead>
                                {
                                    (comment.map((reply, k) =>
                                        < tr >
                                            <td>{reply.id}</td>
                                            <td>{reply.reply}</td>
                                            <td>{reply.date}</td>
                                        </tr>
                                    ))
                                }
                </Table>
            </ModalBody>
            </Modal>
        </Container>
        </div>
    );
}
export default MytweetList;