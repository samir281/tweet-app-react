import {   FaUserSecret} from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Container, Card,Row, Col} from "react-bootstrap";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
const MytweetList = (props)=> {
    function DeletHandler(){
        console.log(props.tweet.id);
        props.deletTweet(props.tweet.username,props.tweet.id)
    }
    function UpdateHandler()
    {
      props.updateTweet(props.tweet.username,props.tweet.id,props.tweet.descip)
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
                        <Button color='warning' onClick={DeletHandler}> <AiFillDelete/> Delete your Tweet!!</Button>
                        <Button onClick={UpdateHandler} >Update your Tweet!! </Button>
                      </ButtonGroup>
                      </Box>
            </Card>
        </Container>
        </div>
    );
}
export default MytweetList;