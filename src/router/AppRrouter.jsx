import { Routes, Route } from 'react-router-dom';
import Home from '../Home'; 
import Favoritos from '../assets/page/Favoritos'; 

function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      

      <Route path="/favoritos" element={<Favoritos />} />
    </Routes>
  );
}

export default AppRoutes;
