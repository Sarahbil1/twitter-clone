import React from "react";
import "./tweetStyles.css";

const Tweets = () => {
    const data = [
        {id: 1, content: "Welcome to my page"},
        {id: 2, content: "Excited to post and share"},
    ];
    return (
        <div className="t-list">
            {data.map((tweet) => (
                <div key={tweet.id} className="tweet">
                    {tweet.content}
                </div> 
            ))}
        </div>
    );
};

export default Tweets;