import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Results } from "./Results";

export const Router = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/" element={<Navigate to="/web" />} />
        <Route exact path="/web" element={<Results />} />
        <Route exact path="/image" element={<Results />} />
        <Route exact path="/news" element={<Results />} />
        <Route exact path="/videos" element={<Results />} />
      </Routes>
    </div>
  );
};
