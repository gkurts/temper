import { useState, useEffect } from "react";

const useTemps = () => {
  const [temps, setTemps] = useState([]);

  useEffect(() => {
    fetch("https://api.gregkurts.net/last")
      .then(res => res.json())
      .then(res => setTemps(res));
  }, []);

  return temps;
};

export default useTemps;
