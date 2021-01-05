import React from 'react'
import { Card, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import './Message.css'

function Message({ username,message }) {
    const isUser = username == message.username;


    return (
        <div className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__guestCard" : "message__userCard"}>
                <CardContent>
                    <Typography
                        color="textSecondary"
                        variant="h5"
                        component="h2">
                        {message.username} : {message.message}
                    </Typography>

                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>

    )
}

export default Message
