import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import Login from "./components/Login";
import AuthProvider from "./Context/AuthProvider";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<ChatRoom />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
