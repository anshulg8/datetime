import React, { useState, useEffect } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

const CurrentDateTime: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4}>
      {/* <Heading size="md">Current Date and Time</Heading> */}
      <VStack mt={2} spacing={2} align="flex-start">
        <Text>
          <strong>Date:</strong> {currentDateTime.toLocaleDateString()}
          {", "}
          {currentDateTime.toLocaleDateString("en-US", { weekday: "long" })}
        </Text>
        <Text>
          <strong>Time:</strong> {currentDateTime.toLocaleTimeString()}
        </Text>
        <Text>
          <strong>ISO String:</strong> {currentDateTime.toISOString()}
        </Text>
        <Text>
          <strong>Epoch Time:</strong> {currentDateTime.getTime()}
        </Text>
      </VStack>
    </Box>
  );
};

export default CurrentDateTime;
