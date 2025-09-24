import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatPage from "./components/ChatPage";
function App() {
  return (
    <Router>
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
