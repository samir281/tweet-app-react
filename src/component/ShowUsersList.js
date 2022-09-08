import { Button } from "@mui/material"
import { Modal, ModalBody } from "react-bootstrap"
import { useState } from "react"
import { Card, ModalHeader } from "react-bootstrap"
import { FaUserSecret } from "react-icons/fa"
import { useLocation, useNavigate } from "react-router-dom"
import MytweetList from "./MytweetList"
import { url } from "./Url"
export function ShowUserList(props){
    let[listTweet,setlistTweet]=useState([])
    let[showsTweets,setshowTweet]=useState(false)
    function fetchMyTweets() {
        fetch(`${url}/username/${props.users.username}`, {
            method: 'GET',
            headers: { 
            'Authorization':`Bearer ${localStorage.getItem("jwt")}` 
        },
        })
            .then(res => {
                console.log(res)
                if(res.status===404){
                    alert("NO TWEETS FOUND");
                }
                else{
                    console.log("hello");
                return res.json().then(data => {
                    console.log(data)
                    listTweet = data
                    setlistTweet(listTweet)
                    setshowTweet(true);
                    console.log(listTweet)
                })
            }
            })
            console.log(listTweet)
    }
    let navigate=useNavigate()
    let location=useLocation()
    function viewtweet(e)
    {
        e.preventDefault()
        fetchMyTweets();
    }
    function hideShowComment(e)
    {
        setshowTweet(false);
    }
    function onDeletehandler(){}
      function onUpdateHandler(){}
      function onCommentHandler(){}
    console.log(props.users)
    return(
        <div>
        <Card>
        <Card.Header>
        <>
                    <FaUserSecret className='m-1' />
                            <Card.Text><b>{props.users.firstname} {props.users.lastname}</b></Card.Text>
                </>
        </Card.Header>
        <Card.Body>
                <Card.Link key={props.users.id}>{props.users.username}</Card.Link>
        </Card.Body>
        <Card.Footer>
        <Button onClick={viewtweet}>
        Cick to view All Tweet of {props.users.username}
        </Button>
        </Card.Footer>
        </Card>
        <Modal show={showsTweets}>
        <ModalHeader>
            <Button onClick={hideShowComment}>Close</Button>
            </ModalHeader>
            <ModalBody>
        {
            listTweet.map(function (tweet, index) {
                return (
                    <MytweetList tweet={tweet} 
                    deletTweet={onDeletehandler} 
                    updateTweet={onUpdateHandler} 
                    showComment={onCommentHandler}/>
                )}
            )
        }
        </ModalBody>
        </Modal>
        </div>
    )
}