import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Wallet from "./pages/Wallet";
// import Merchants from "./pages/Merchants";
// import Transactions from "./pages/Transactions";
// import Beneficiaries from "./pages/Beneficiaries";
import Header from "./components/Header";
import Dashboard from "./modules/Dashboard";
import logo from "./assets/image.png";

const App = () => (
  <Router>
    <Header logo={logo} userName="Andy" />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Wallet" element={<Dashboard />} />
      <Route path="/merchants" element={<Dashboard />} />
      <Route path="/transactions" element={<Dashboard />} />
      <Route path="/beneficiaries" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default App;
