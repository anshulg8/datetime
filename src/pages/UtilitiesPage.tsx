import React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import CurrentDateTime from "../components/utilities/CurrentDateTime";
import TimeZoneConverter from "../components/utilities/TimeZoneConverter";
import DateDifferenceCalculator from "../components/utilities/DateDifferenceCalculator";
import CountdownTimer from "../components/utilities/CountdownTimer";
import Stopwatch from "../components/utilities/StopWatch";
import WeekNumber from "../components/utilities/WeekNumber";
import CalendarView from "../components/utilities/CalendarView";
import TimeUntil from "../components/utilities/TimeUntil";

const UtilitiesPage: React.FC = () => {
  return (
    <VStack spacing={8} mt={8}>
      <Heading>DateTime Utilities</Heading>
      <CurrentDateTime />
      <DateDifferenceCalculator />
      <CountdownTimer
        targetDate={new Date(new Date().getFullYear() + 1, 0, 1)}
      />
      <TimeZoneConverter />
      <Stopwatch />
      <WeekNumber />
      <CalendarView />
      <TimeUntil />
    </VStack>
  );
};

export default UtilitiesPage;
