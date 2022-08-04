import {   FaUserSecret } from "react-icons/fa";
import { Container, Card, Row, Col, Button, Modal, Table, ModalHeader, ModalBody, ModalFooter, ModalTitle } from "react-bootstrap";
const MytweetList = (props)=> {
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
            </Card>
        </Container>
        </div>
    );
}
export default MytweetList;