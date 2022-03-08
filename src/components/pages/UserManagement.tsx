import { memo, VFC } from "react";
import { Box, Image, Stack, Wrap, WrapItem } from "@chakra-ui/react";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap>
      <WrapItem>
        <Box
          w="260px"
          h="260px"
          bg="white"
          borderRadius="10px"
          shadow="md"
        ></Box>
        <Stack textAlign="center">
          <Image src="https://source.unsplash.com/random" />
        </Stack>
      </WrapItem>
    </Wrap>
  );
});
