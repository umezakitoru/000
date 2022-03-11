/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, VFC } from "react";
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";

import { UserCard } from "../organism/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => getUsers(), []);

  return (
    <>
      {true ? (
        <Center h="100hv">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          <WrapItem>
            <UserCard
              imageUrl="https://source.unsplash.com/random"
              userName="うめ"
              fullName="umezaki toru"
            />
          </WrapItem>
        </Wrap>
      )}
    </>
  );
});
