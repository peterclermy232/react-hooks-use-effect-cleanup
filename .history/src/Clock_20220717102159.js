import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
    // returning
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
