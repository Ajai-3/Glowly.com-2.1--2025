import { Routes, Route } from 'react-router-dom';
import Dashboard from '../features/admin/pages/Dashboard';
import NotFound from '../shared/pages/NotFound';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AdminRoutes;
