import React from "react"
import Card from "react-bootstrap/Card"
import TylerProfile from './TylerProfile.png'

function GitHubCard() {
    return (
        <div className="card">
            <Card style={{ width: "18rem"}}>
            <Card.Img variant="top" src={TylerProfile} />
            <Card.Body>
                <Card.Title>TylerIsMoore</Card.Title>
                <Card.Text>
                Just a man trying to figure out if this is what he wants to do in life.
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
}

export default GitHubCard