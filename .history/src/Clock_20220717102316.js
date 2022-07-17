import React, { useState, useEffect } from "react";
import { clearInterval } from "timers";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
    // returning a cleanup function
    return function cleanup(){
      clearInterval(ti)
    }
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
