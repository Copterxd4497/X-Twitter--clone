import { useEffect, useState } from "react";
import Sidebar from "./sidebarFolder/sidebar.jsx";
import Feed from "./feedFolder/feed.jsx";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="layout">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
