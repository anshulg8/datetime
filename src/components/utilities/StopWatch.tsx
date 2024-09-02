import React, { useState, useEffect } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

const Stopwatch: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);

  useEffect(() => {
    let intervalId: number | undefined;

    if (isRunning) {
      intervalId = window.setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 10);
      }, 10); // Update every 10 milliseconds
    }

    return () => {
      if (intervalId !== undefined) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}.${
      milliseconds < 100
        ? `0${milliseconds < 10 ? `00${milliseconds}` : `0${milliseconds}`}`
        : milliseconds
    }`;
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" textAlign="center">
      <Text fontSize="2xl">{formatTime(timeElapsed)}</Text>
      <Button
        mt={4}
        colorScheme={isRunning ? "red" : "teal"}
        onClick={() => setIsRunning(!isRunning)}
      >
        {isRunning ? "Stop" : "Start"}
      </Button>
      <Button mt={4} ml={4} onClick={() => setTimeElapsed(0)}>
        Reset
      </Button>
    </Box>
  );
};

export default Stopwatch;
