import React from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from './MessageSender';
import Post from './Post';


function Feed() {
    return (
        <div className="feed">
            <StoryReel></StoryReel>
            <MessageSender></MessageSender>
            <Post 
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdPSSkp3-wX9zZ89ioztCC9wbsWhYkBjLHWw&usqp=CAU"
            message="Stylish Star"
            timestamp="timestamp"
            username="AlluArjun"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdPSSkp3-wX9zZ89ioztCC9wbsWhYkBjLHWw&usqp=CAU"
            ></Post>
            <Post 
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8nogWeTioO-DuSD2qZGEUwiNWtp9RpJ8iZA&usqp=CAU"
            message="Hitman"
            timestamp="timestamp"
            username="Rohit Sharma"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8nogWeTioO-DuSD2qZGEUwiNWtp9RpJ8iZA&usqp=CAU"
            ></Post>
            <Post 
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoxxd2sQJb60NF8Oe3TeVNV4Y4WzudtD48xg&usqp=CAU"
            message="God of Cricket"
            timestamp="timestamp"
            username="Sachin Tendulkar"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoxxd2sQJb60NF8Oe3TeVNV4Y4WzudtD48xg&usqp=CAU"
            ></Post>
        </div>
    )
}

export default Feed
