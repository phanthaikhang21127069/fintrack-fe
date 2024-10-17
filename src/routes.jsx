import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'; // Import framer-motion
import Login from './pages/login'; // Import Login component
import Signup from './pages/signup'; // Import Signup component
import Dashboard from './pages/dashboard'; // Import Dashboard component
import ExpenseTracker from './pages/expenseTracker';

const AnimatedRouteWrapper = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/login"
        element={
          <AnimatedRouteWrapper>
            <Login />
          </AnimatedRouteWrapper>
        }
      />
      <Route
        path="/signup"
        element={
          <AnimatedRouteWrapper>
            <Signup />
          </AnimatedRouteWrapper>
        }
      />
      <Route
        path="/dashboard"
        element={
          <AnimatedRouteWrapper>
            <Dashboard />
          </AnimatedRouteWrapper>
        }
      />
      <Route
        path="/expenseTracker"
        element={
          <AnimatedRouteWrapper>
            <ExpenseTracker />
          </AnimatedRouteWrapper>
        }
      />
    </>
  )
);
