import { useState, useEffect } from "react";
const LAST10_URL = process.env.LAST10_URL;

const useTemps = () => {
  const [temps, setTemps] = useState([]);

  useEffect(() => {
    fetch(LAST10_URL)
      .then(res => res.json())
      .then(res => setTemps(res));
  }, []);

  return temps;
};

export default useTemps;
