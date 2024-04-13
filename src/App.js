import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/home";
import History from "./pages/history";
import NotFound from "./components/notFound";
import { Toaster } from "react-hot-toast"
function App () {
  return (
    <div className="flex flex-col h-screen">
      <Toaster />
      <Router>
        <Sidebar />
        <div className=' w-full pt-2 max-md:p-0 flex-1'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/history' element={<History />} />
            <Route path='*' exact={true} element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
