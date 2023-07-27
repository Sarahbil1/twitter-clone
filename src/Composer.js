import React, {useState} from "react";

const Composer = () => {
    const [tweetContent, setTweetContent] = useState("");

    const Submit = () => {
        console.log("New Tweet:", tweetContent);
        setTweetContent("");
    };

    return (
        <div className="composer">
            <textarea 
              value={tweetContent}
              onChange={(e) => setTweetContent(e.target.value)}
              placeholder="What's happening?"
              rows="3"
              cols="40"
            />
            <button onClick={Submit}>Tweet</button>  
        </div>
    );
};

export default Composer;