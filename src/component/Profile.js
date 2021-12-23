import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Profile extends Component {
    constructor(props) {
        console.log("construction");
        super(props);
        this.state = {
            count: 0,
        };
    }



    componentDidMount() {
        this.timer = setInterval(() => {this.setState({count: this.state.count+1})} , 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        console.log("rendering");
        return (
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={this.props.Img}/>
                <Card.Body>
                    <Card.Title>{this.props.Fullname}</Card.Title>
                    <Card.Text>
                        {this.props.Bio}
                    </Card.Text>
                    <Card.Text>
                        Time that has elapsed since the component mounted
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}