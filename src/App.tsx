import React from "react";
import {
  Container,
  Grid,
  GridItem,
  Box,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import CurrentDateTime from "./components/utilities/CurrentDateTime";
import TimeZoneConverter from "./components/utilities/TimeZoneConverter";
import DateDifferenceCalculator from "./components/utilities/DateDifferenceCalculator";
import CountdownTimer from "./components/utilities/CountdownTimer";
import Stopwatch from "./components/utilities/StopWatch";
import WeekNumber from "./components/utilities/WeekNumber";
import CalendarView from "./components/utilities/CalendarView";
import TimeUntil from "./components/utilities/TimeUntil";
import StartEndOfWeek from "./components/utilities/StartEndOfWeek";
import EpochConverter from "./components/utilities/EpochConverter";
import Footer from "./components/Footer";

const App: React.FC = () => {
  // Define number of columns based on screen size
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 3 });

  return (
    <Container maxW="container.xl" p={4}>
      <Text fontSize="2xl" mb={6} textAlign="center" fontWeight="bold">
        Utility Dashboard
      </Text>
      <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
        <GridItem>
          <Box borderWidth="1px" borderRadius="md" p={4} boxShadow="md">
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Current DateTime
            </Text>
            <CurrentDateTime />
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth="1px" borderRadius="md" p={4} boxShadow="md">
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Date Difference Calculator
            </Text>
            <DateDifferenceCalculator />
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth="1px" borderRadius="md" p={4} boxShadow="md">
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Time Zone Converter
            </Text>
            <TimeZoneConverter />
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth="1px" borderRadius="md" p={4} boxShadow="md">
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Time Until New Year
            </Text>
            <CountdownTimer
              targetDate={new Date(new Date().getFullYear() + 1, 0, 1)}
            />
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth="1px" borderRadius="md" p={4} boxShadow="md">
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Stopwatch
            </Text>
            <Stopwatch />
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth="1px" borderRadius="md" p={4} boxShadow="md">
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Year Progress
            </Text>
            <WeekNumber />
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth="1px" borderRadius="md" p={4} boxShadow="md">
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Epoch Converter
            </Text>
            <EpochConverter />
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth="1px" borderRadius="md" p={4} boxShadow="md">
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Time Until
            </Text>
            <TimeUntil />
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth="1px" borderRadius="md" p={4} boxShadow="md">
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Start and End of the Week
            </Text>
            <StartEndOfWeek />
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth="1px" borderRadius="md" p={4} boxShadow="md">
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Calendar View
            </Text>
            <CalendarView />
          </Box>
        </GridItem>
      </Grid>
      <Footer />
    </Container>
  );
};

export default App;
