import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorScreen } from "../screens/ErrorScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { InteligenceScreen } from "../screens/InteligenceScreen";
import { LoadingScreen } from "../screens/LoadingScreen";
import { ResultScreen } from "../screens/ResultScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { ProtectedRoute } from "../helper/ProtectedRoute";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomeScreen />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<LoginScreen />}></Route>
        <ProtectedRoute>
          <Route path="/intelligence" element={<InteligenceScreen />}></Route>
        </ProtectedRoute>

        <ProtectedRoute>
          <Route path="/result" element={<ResultScreen />}></Route>
        </ProtectedRoute>

        <ProtectedRoute>
          <Route path="/error" element={<ErrorScreen />}></Route>
        </ProtectedRoute>

        <ProtectedRoute>
          <Route path="/loading" element={<LoadingScreen />}></Route>
        </ProtectedRoute>
      </Routes>
    </Router>
  );
};
