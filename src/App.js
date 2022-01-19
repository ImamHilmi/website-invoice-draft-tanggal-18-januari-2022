import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Dashboard/Main/Main';
import Form from './pages/Login/Form';
import Invoice from './pages/Invoice/Invoice';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Navigate to="/login" />}  />
          <Route exact path="/login" element={<Form />} />
          <Route exact path="/dashboard" element={<Main />} />
          <Route exact path="/invoice" element={<Invoice />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
