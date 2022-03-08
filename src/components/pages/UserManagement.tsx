import { memo, VFC } from "react";
import { Box, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap>
      <WrapItem>
        <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md">
          <Stack textAlign="center">
            <Image
              borderRadius="full"
              boxSize="160px"
              src="https://source.unsplash.com/random"
              alt="プロフィール画像"
              margin="auto"
            />
            <Text fontSize="lg" fontWeight="bold">
              うめ
            </Text>
            <Text fontSize="sm" color="gray">
              umezaki toru
            </Text>
          </Stack>
        </Box>
      </WrapItem>
    </Wrap>
  );
});
