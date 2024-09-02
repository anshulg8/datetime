import React from "react";
import { Box, Progress, Text, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear";
import isLeapYear from "dayjs/plugin/isLeapYear";

// Load the required plugins(dependency)
dayjs.extend(isLeapYear);
dayjs.extend(isoWeeksInYear);

// const currentYear = dayjs().year();
const weeksInCurrentYear = dayjs().isoWeeksInYear();

dayjs.extend(weekOfYear);

const now = dayjs();
const weekNumber = dayjs().week();
const startOfYear = dayjs().startOf("year");
const endOfYear = dayjs().endOf("year");
const daysPassed = now.diff(startOfYear, "day") + 1;
const totalDaysInYear = endOfYear.diff(startOfYear, "day") + 1;
// const totalDaysInYear = dayjs().isLeapYear() ? 366 : 365;
const monthsPassed = now.month() + 1;
const percentageComplete = ((daysPassed / totalDaysInYear) * 100).toFixed(2);

const WeekNumber: React.FC = () => {
  return (
    <Box borderWidth="1px" borderRadius="md" p={4} boxShadow="md">
      <VStack spacing={4} align="stretch">
        <Text fontSize="md">
          Days Passed: {daysPassed} / {totalDaysInYear}
        </Text>
        <Text fontSize="md">
          Weeks Passed: {weekNumber} / {weeksInCurrentYear}
        </Text>
        <Text fontSize="md">Months Passed: {monthsPassed} / 12</Text>
        <Text fontSize="md">
          Percentage of Year Completed: {percentageComplete}%
        </Text>
        <Progress
          value={parseFloat(percentageComplete)}
          size="sm"
          colorScheme="teal"
          hasStripe
          isAnimated
        />
      </VStack>
    </Box>
  );
};

export default WeekNumber;
