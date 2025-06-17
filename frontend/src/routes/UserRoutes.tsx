import { Routes, Route } from 'react-router-dom';
import Home from '../features/user/pages/Home';
import NotFound from '../shared/pages/NotFound';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default UserRoutes;
