import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import TestimonialsPage from './pages/Testimonials';
import ContactPage from './pages/Contact';
import EligibilityPage from './pages/Eligibility';
import ApplyPage from './pages/Apply';
import DocumentsPage from './pages/Documents';
import PaymentPage from './pages/Payment';
import OpportunitiesPage from './pages/Opportunities';
import ProfilePage from './pages/Profile';
import LoginPage from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/eligibility" element={<EligibilityPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/opportunities" element={<OpportunitiesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Admin routes - placeholder */}
        <Route path="/admin" element={<div>Admin Placeholder</div>}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<div>Admin Dashboard</div> />}
          <Route path="queue" element={<div>Admin Queue</div> />}
          <Route path="listings" element={<div>Admin Listings</div> />}
          <Route path="payments" element={<div>Admin Payments</div> />}
          <Route path="staff" element={<div>Admin Staff</div> />}
          <Route path="config" element={<div>Admin Config</div> />}
          <Route path="languages" element={<div>Admin Languages</div> />}
        </Route>
        
        {/* Catch-all for 404 */}
        <Route path="*" element={<div>404 - Not Found</div> />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
