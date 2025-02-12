import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { UserProvider } from "./Context/AuthContext";
import DashboardLayout from "./components/DashboardLayOut";
import HomePage from "./HomePage";
import HotelDetails from "./HotelDetails";
import RestaurantDetails from "./RestaurantDetails";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FoodMenu from "./FoodMenu";
import { ProtectedRoute } from "./Context/ProtectedRoute";


const AppContent = () => {
  const loc=useLocation()
  // console.log(loc.pathname.split('/'));
  const getLoc=loc.pathname.split('/')
  const mainLoc=getLoc[2]
  console.log(mainLoc);
  
  
  return (
    <>
      {mainLoc !== "profile" && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:hotelName/profile/*" element={<DashboardLayout />} />
        <Route path="/:hotelName" element={<HotelDetails />} />
        <Route path="/:hotelName/:roomNumber" element={
          <ProtectedRoute>
            <RestaurantDetails />
          </ProtectedRoute>
          } />
        <Route 
          path="/:hotelName/:roomNumber/:restaurantName/menu" 
          element={
              <FoodMenu />
          } 
        />
      </Routes>
      {mainLoc !== "profile" && <Footer />}
    </>
  );
};
const App = () => {
  return (
    <Router>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </Router>
  );
};

export default App;
