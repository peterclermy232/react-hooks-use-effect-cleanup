import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
    // returning a cleanup function
    retrun function 
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
