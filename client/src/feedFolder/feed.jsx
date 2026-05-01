import { useState } from "react";
import "./feed.css";
import "./../App.css";

const MOCK_TWEETS = [
  {
    id: 1,
    author: "John Doe",
    handle: "@johndoe",
    avatar: "J",
    timestamp: "2h",
    content:
      "Just launched my new project! Really excited about this one. Check it out and let me know what you think!",
    image: null,
    likes: 234,
    retweets: 45,
    replies: 12,
    liked: false,
    retweeted: false,
  },
  {
    id: 2,
    author: "Jane Smith",
    handle: "@janesmith",
    avatar: "S",
    timestamp: "4h",
    content: "Beautiful sunset today. Nature is amazing!",
    image: null,
    likes: 892,
    retweets: 156,
    replies: 45,
    liked: false,
    retweeted: false,
  },
  {
    id: 3,
    author: "Tech News",
    handle: "@technewstoday",
    avatar: "T",
    timestamp: "6h",
    content:
      "Breaking: New AI breakthrough announced. Read more about the latest developments in machine learning.",
    image: null,
    likes: 5234,
    retweets: 1203,
    replies: 342,
    liked: false,
    retweeted: false,
  },
];

export default function Feed() {
  const [tweets, setTweets] = useState(MOCK_TWEETS);
  const [newTweet, setNewTweet] = useState("");

  const handlePostTweet = () => {
    if (newTweet.trim()) {
      const tweet = {
        id: tweets.length + 1,
        author: "User Name",
        handle: "@username",
        avatar: "U",
        timestamp: "now",
        content: newTweet,
        image: null,
        likes: 0,
        retweets: 0,
        replies: 0,
        liked: false,
        retweeted: false,
      };
      setTweets([tweet, ...tweets]);
      setNewTweet("");
    }
  };

  const handleLike = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id
          ? {
              ...tweet,
              liked: !tweet.liked,
              likes: tweet.liked ? tweet.likes - 1 : tweet.likes + 1,
            }
          : tweet,
      ),
    );
  };

  const handleRetweet = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id
          ? {
              ...tweet,
              retweeted: !tweet.retweeted,
              retweets: tweet.retweeted
                ? tweet.retweets - 1
                : tweet.retweets + 1,
            }
          : tweet,
      ),
    );
  };

  return (
    <main className="feed">
      <div className="feed-header">
        <h2>Home</h2>
        <div className="feed-icons">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1C6.48 1 2 5.48 2 11s4.48 10 10 10 10-4.48 10-10S17.52 1 12 1zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 7 15.5 7 14 7.67 14 8.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 7 8.5 7 7 7.67 7 8.5 7.67 10 8.5 10z" />
          </svg>
        </div>
      </div>

      <div className="compose-box">
        <div className="compose-avatar">U</div>
        <div className="compose-content">
          <textarea
            placeholder="What's happening?!"
            className="compose-input"
            value={newTweet}
            onChange={(e) => setNewTweet(e.target.value)}
            rows="4"
          />
          <div className="compose-bottom">
            <div className="compose-icons">
              <button className="icon-btn">📷</button>
              <button className="icon-btn">😊</button>
              <button className="icon-btn">📅</button>
            </div>
            <button
              className="post-button"
              onClick={handlePostTweet}
              disabled={!newTweet.trim()}
            >
              Post
            </button>
          </div>
        </div>
      </div>

      <div className="tweets-container">
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            tweet={tweet}
            onLike={handleLike}
            onRetweet={handleRetweet}
          />
        ))}
      </div>
    </main>
  );
}

function Tweet({ tweet, onLike, onRetweet }) {
  return (
    <article className="tweet">
      <div className="tweet-avatar">{tweet.avatar}</div>
      <div className="tweet-content">
        <div className="tweet-header">
          <span className="tweet-author">{tweet.author}</span>
          <span className="tweet-handle">{tweet.handle}</span>
          <span className="tweet-dot">·</span>
          <span className="tweet-time">{tweet.timestamp}</span>
        </div>
        <p className="tweet-text">{tweet.content}</p>
        {tweet.image && (
          <img src={tweet.image} alt="" className="tweet-image" />
        )}
        <div className="tweet-actions">
          <div className="action-item">
            <button className="action-btn" title="Reply">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </button>
            <span className="action-count">{tweet.replies}</span>
          </div>
          <div className="action-item">
            <button
              className="action-btn"
              onClick={() => onRetweet(tweet.id)}
              style={{ color: tweet.retweeted ? "#1da1f2" : "inherit" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="17 2 19 4 17 6" />
                <path d="M3 11v-1a4 4 0 0 1 4-4h12.95M7 20v1a4 4 0 0 0 4 4h12.95" />
                <polyline points="7 22 5 20 7 18" />
              </svg>
            </button>
            <span className="action-count">{tweet.retweets}</span>
          </div>
          <div className="action-item">
            <button
              className="action-btn"
              onClick={() => onLike(tweet.id)}
              style={{ color: tweet.liked ? "#e0245e" : "inherit" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  fill={tweet.liked ? "#e0245e" : "none"}
                />
              </svg>
            </button>
            <span className="action-count">{tweet.likes}</span>
          </div>
          <div className="action-item">
            <button className="action-btn" title="Share">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
