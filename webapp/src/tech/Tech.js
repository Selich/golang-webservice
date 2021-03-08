import React, { useState, useEffect } from "react";
import axios from "axios";

export const Tech = () => {
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/test`)
      .then((resp) => console.log(resp));
  }, []);

  return <h2>Test </h2>;
};
