import React, { useState, useEffect } from "react";
import { Box, Text, VStack, Select } from "@chakra-ui/react";

const TimeZoneConverter: React.FC = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState("UTC");
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleString("en-US", { timeZone: selectedTimeZone })
  );

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleString("en-US", { timeZone: selectedTimeZone })
      );
    };

    // Update the time every second
    const timerId = setInterval(updateTime, 1000);

    // Clean up the timer on component unmount
    return () => clearInterval(timerId);
  }, [selectedTimeZone]);

  const handleTimeZoneChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedTimeZone(event.target.value);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4}>
      <VStack mt={4} spacing={4}>
        <Select value={selectedTimeZone} onChange={handleTimeZoneChange}>
          <option value="UTC">UTC</option>
          <option value="America/New_York">New York (EST)</option>
          <option value="Europe/London">London (GMT)</option>
          <option value="Asia/Kolkata">Kolkata (IST)</option>
          <option value="Australia/Sydney">Sydney (AEST)</option>
          <option value="America/Los_Angeles">America/Los_Angeles</option>
          <option value="Europe/Paris">Europe/Paris</option>
          <option value="Asia/Tokyo">Asia/Tokyo</option>
          <option value="America/Chicago">America/Chicago</option>
          <option value="America/Denver">America/Denver</option>
          <option value="America/Sao_Paulo">America/Sao_Paulo</option>
          <option value="Africa/Johannesburg">Africa/Johannesburg</option>
          <option value="Asia/Shanghai">Asia/Shanghai</option>
          <option value="Pacific/Auckland">Pacific/Auckland</option>
          <option value="Asia/Dubai">Asia/Dubai</option>
        </Select>
        <Text>
          Current Time in {selectedTimeZone}: <strong>{currentTime}</strong>
        </Text>
      </VStack>
    </Box>
  );
};

export default TimeZoneConverter;
