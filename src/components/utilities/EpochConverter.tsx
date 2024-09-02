import React, { useState } from "react";
import { Box, Button, Input, Stack, Text, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const EpochConverter: React.FC = () => {
  const [epoch, setEpoch] = useState("");
  const [utcDate, setUtcDate] = useState<string | null>(null);
  const [localDate, setLocalDate] = useState<string | null>(null);
  const [timestamp, setTimestamp] = useState<string | null>(null);
  const currentTimeZone = dayjs.tz.guess(); // Guess the current timezone

  const handleEpochChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEpoch(e.target.value);
  };

  const convertEpochToDate = () => {
    const epochNumber = parseInt(epoch, 10);
    if (!isNaN(epochNumber)) {
      const utcFormattedDate = dayjs
        .unix(epochNumber / 1000)
        .utc()
        .format("YYYY-MM-DD HH:mm:ss [UTC]");
      const localFormattedDate = dayjs
        .unix(epochNumber / 1000)
        .tz(currentTimeZone)
        .format("YYYY-MM-DD HH:mm:ss [Local]");
      setUtcDate(utcFormattedDate);
      setLocalDate(localFormattedDate);
    } else {
      setUtcDate("Invalid epoch timestamp");
      setLocalDate("Invalid epoch timestamp");
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalDate(e.target.value);
  };

  const convertDateToEpoch = () => {
    const formattedDate = dayjs(localDate).unix() * 1000;
    setTimestamp(formattedDate.toString());
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      p={4}
      boxShadow="md"
      maxW="600px"
      mx="auto"
    >
      <VStack spacing={4} align="stretch">
        <Stack spacing={3}>
          <Input
            placeholder="Enter Unix timestamp"
            value={epoch}
            onChange={handleEpochChange}
            type="number"
          />
          <Button colorScheme="teal" onClick={convertEpochToDate}>
            Convert to Date
          </Button>
          {utcDate && (
            <Text
              isTruncated
              maxW="full"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              UTC Date: {utcDate}
            </Text>
          )}
          {localDate && (
            <Text
              isTruncated
              maxW="full"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              Local Date: {localDate}
            </Text>
          )}
        </Stack>

        <Stack spacing={3}>
          <Input
            placeholder="Enter Date (YYYY-MM-DD HH:mm:ss)"
            value={localDate || ""}
            onChange={handleDateChange}
          />
          <Button colorScheme="teal" onClick={convertDateToEpoch}>
            Convert to Epoch
          </Button>
          {timestamp && (
            <Text
              isTruncated
              maxW="full"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              Converted Epoch: {timestamp}
            </Text>
          )}
        </Stack>
      </VStack>
    </Box>
  );
};

export default EpochConverter;
