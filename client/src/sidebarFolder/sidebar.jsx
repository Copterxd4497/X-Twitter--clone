import "./sidebar.css";
import "./../App.css";

export default function Sidebar() {
  const navItems = [
    { icon: "Home", label: "Home" },
    { icon: "Explore", label: "Explore" },
    { icon: "Notifications", label: "Notifications" },
    { icon: "Messages", label: "Messages" },
    { icon: "Bookmarks", label: "Bookmarks" },
    { icon: "Profile", label: "Profile" },
    { icon: "More", label: "More" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <div className="logo">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.898 6.75h-3.308l7.73-8.835L2.42 2.25h6.76l4.6 6.388 5.365-6.388zM17.002 18.874h1.355L6.463 3.626H4.972l12.03 15.248z" />
          </svg>
        </div>

        <nav className="nav-menu">
          {navItems.map((item) => (
            <div key={item.label} className="nav-item">
              <NavIcon iconName={item.icon} />
              <span className="nav-label">{item.label}</span>
            </div>
          ))}
        </nav>

        <button className="post-btn">Post</button>
      </div>

      <div className="user-menu">
        <div className="user-profile">
          <div className="avatar">U</div>
          <div className="user-info">
            <div className="user-name">User Name</div>
            <div className="user-handle">@username</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function NavIcon({ iconName }) {
  const icons = {
    Home: "M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z",
    Explore:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    Notifications:
      "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z",
    Messages:
      "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z",
    Bookmarks: "M17 3H5c-1.11 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.89-2-2-2z",
    Profile:
      "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    More: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
  };

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
      className="nav-icon"
    >
      <path d={icons[iconName]} />
    </svg>
  );
}
