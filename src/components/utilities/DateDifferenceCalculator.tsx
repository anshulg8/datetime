import React, { useState } from "react";
import { Box, Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";

const DateDifferenceCalculator: React.FC = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [difference, setDifference] = useState<string | null>(null);

  const calculateDifference = () => {
    if (startDate && endDate) {
      const start = dayjs(startDate);
      const end = dayjs(endDate);

      // Calculate the total difference in days
      const totalDays = end.diff(start, "day");

      // Calculate the difference in years, months, and days
      const years = end.diff(start, "year");
      const months = end.diff(start.add(years, "year"), "month");
      const days = end.diff(
        start.add(years, "year").add(months, "month"),
        "day"
      );

      setDifference(
        `${years} year${years !== 1 ? "s" : ""}, ${months} month${
          months !== 1 ? "s" : ""
        }, and ${days} day${days !== 1 ? "s" : ""} (${totalDays} days in total)`
      );
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4}>
      {/* <Heading size="md">Date Difference Calculator</Heading> */}
      <VStack mt={4} spacing={4}>
        <HStack>
          <Input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="Select Date 1"
          />
          <Input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            placeholder="Select Date 2"
          />
        </HStack>
        <Button colorScheme="teal" onClick={calculateDifference}>
          Calculate Difference
        </Button>
        {difference && (
          <Text>
            Difference: <strong>{difference}</strong>
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default DateDifferenceCalculator;
