import { useEffect, useState } from "react";
import Menu from "./NavBar"
import { useLocation } from "react-router-dom";
import { Container, Card, Row, Col, Button, Modal, Table, ModalHeader, ModalBody, ModalFooter, ModalTitle } from "react-bootstrap";
import {   FaUserSecret } from "react-icons/fa";
import { url } from './url'
import MytweetList from "./MytweetList";
let tweets = []
let dummy = []
const MyTweets = (props) => {

    // function fetchUserReplies() {
    //     fetch(`${url}/getAllReplies`)
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             console.log(data)
    //             setPostReplies(data)
    //         })
    // }

    // view replies for a particular post
    // function viewPostReplies(data) {
    //     console.log(data)
    //     replies = []
    //     let length = postReplies.length
    //     for (let i = 0; i < length; i++) {
    //         if (postReplies[i].tweetId === data) {
    //             replies.push(postReplies[i])
    //         }
    //         filterReplies = replies
    //     }
    //     setFilterReplies(filterReplies)
    //     console.log(filterReplies)
    //     setViewReplyModal(true)
    // }

    // useEffect(() => {
    //     fetchMyTweets()
    //     //fetchUserReplies()

    // }, []);

    return (
        <div>
            <Menu />
            <div>
                <Container>
                    {props.myTweets.map(function (tweet, index) {
                        return (
                            <MytweetList tweet={tweet}></MytweetList>
                        )
                    })}
                </Container>
            </div>
        </div>
    )
}

export default MyTweets;