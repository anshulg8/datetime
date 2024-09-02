import React from "react";
import { Box, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.extend(weekOfYear);

const StartEndOfWeek: React.FC = () => {
  const startOfWeek = dayjs().startOf("week").format("MMMM DD, YYYY");
  const endOfWeek = dayjs().endOf("week").format("MMMM DD, YYYY");

  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <Text fontSize="lg">Start of the Week:</Text>
      <Text fontSize="xl" fontWeight="bold">
        {startOfWeek}
      </Text>
      <Text fontSize="lg" mt={4}>
        End of the Week:
      </Text>
      <Text fontSize="xl" fontWeight="bold">
        {endOfWeek}
      </Text>
    </Box>
  );
};

export default StartEndOfWeek;
