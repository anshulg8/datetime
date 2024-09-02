import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(
    targetDate.getTime() - new Date().getTime()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(targetDate.getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const formatTime = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" textAlign="center">
      <Text fontSize="2xl">{formatTime(timeRemaining)}</Text>
    </Box>
  );
};

export default CountdownTimer;
