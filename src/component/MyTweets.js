import { Container}from "react-bootstrap";
import MytweetList from "./MytweetList";
let tweets = []
let dummy = []
const MyTweets = (props) => {
    return (
        <div>
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