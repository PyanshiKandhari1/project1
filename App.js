import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import VerifierDashboard from './pages/VerifierDashboard';
import AdminDashboard from './pages/AdminDashboard';
import CertificatePublic from './pages/CertificatePublic';
import BecomeVerifier from './pages/BecomeVerifier';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard/student' element={<StudentDashboard />} />
        <Route path='/dashboard/verifier' element={<VerifierDashboard />} />
        <Route path='/dashboard/admin' element={<AdminDashboard />} />
        <Route path='/cert/:id' element={<CertificatePublic />} />
        <Route path='/verify-request' element={<BecomeVerifier />} />
      </Routes>
    </Router>
  );
}

export default App;