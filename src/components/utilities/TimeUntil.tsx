import React, { useState, useEffect } from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const TimeUntil: React.FC = () => {
  const [futureDate, setFutureDate] = useState<string>("");
  const [timeUntil, setTimeUntil] = useState<string>("");

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (futureDate) {
      const updateTimeUntil = () => {
        const now = dayjs();
        const targetDate = dayjs(futureDate);
        const diff = targetDate.diff(now);
        const duration = dayjs.duration(diff);

        if (diff > 0) {
          const formatted = `${duration.days()} days, ${duration.hours()} hours, ${duration.minutes()} minutes, ${duration.seconds()} seconds`;
          setTimeUntil(formatted);
        } else {
          setTimeUntil("The date has passed!");
        }
      };

      updateTimeUntil();
      timerId = setInterval(updateTimeUntil, 1000);

      return () => clearInterval(timerId);
    }
  }, [futureDate]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFutureDate(e.target.value);
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <Input
        type="datetime-local"
        value={futureDate}
        onChange={handleDateChange}
        mb={4}
      />
      <Text fontSize="xl">{timeUntil}</Text>
    </Box>
  );
};

export default TimeUntil;
