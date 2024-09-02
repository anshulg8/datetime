import React, { useState } from "react";
import { Box, Grid, Text, IconButton, HStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import { FaChevronLeft, FaChevronRight, FaHome } from "react-icons/fa";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarView: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const today = dayjs();

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const startDay = startOfMonth.day(); // Get the day of the week the month starts on
  const daysInMonth = currentDate.daysInMonth();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  const handleGoToCurrentMonth = () => {
    setCurrentDate(today);
  };

  // const getDayOfWeek = (day: number) => {
  //   return dayjs(currentDate.date(day)).format("ddd");
  // };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <HStack justifyContent="space-between" mb={4}>
        <IconButton
          aria-label="Go to Current Month"
          icon={<FaHome />}
          onClick={handleGoToCurrentMonth}
        />
        <HStack>
          <IconButton
            aria-label="Previous Month"
            icon={<FaChevronLeft />}
            onClick={handlePrevMonth}
          />
          <Text fontSize="lg" fontWeight="bold">
            {currentDate.format("MMMM YYYY")}
          </Text>
          <IconButton
            aria-label="Next Month"
            icon={<FaChevronRight />}
            onClick={handleNextMonth}
          />
        </HStack>
      </HStack>

      <Grid templateColumns="repeat(7, 1fr)" gap={2}>
        {daysOfWeek.map((day) => (
          <Text key={day} textAlign="center" fontWeight="bold">
            {day}
          </Text>
        ))}
        {/* Empty cells for days before the start of the month */}
        {Array.from({ length: startDay }).map((_, index) => (
          <Box key={`empty-${index}`} />
        ))}
        {daysArray.map((day) => (
          <Box
            key={day}
            p={2}
            textAlign="center"
            bg={
              day === today.date() && currentDate.isSame(dayjs(), "month")
                ? "teal.500"
                : "gray.200"
            }
            color={
              day === today.date() && currentDate.isSame(dayjs(), "month")
                ? "white"
                : "black"
            }
            borderRadius="md"
          >
            <Text>{day}</Text>
            {/* <Text fontSize="sm">{getDayOfWeek(day)}</Text> */}
          </Box>
        ))}
        {/* Empty cells for days after the end of the month */}
        {Array.from({ length: 6 - endOfMonth.day() }).map((_, index) => (
          <Box key={`empty-end-${index}`} />
        ))}
      </Grid>
    </Box>
  );
};

export default CalendarView;
