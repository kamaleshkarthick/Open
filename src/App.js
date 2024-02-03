import Dashboard from "./Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninPage from "./Sign in Page/Signin";

function App() {
  return (
    <>
      {/* <SigninPage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="" element={<SigninPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
