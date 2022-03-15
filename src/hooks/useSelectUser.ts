import { useCallback, useState } from "react";

export const useSelectuser = () => {
  const [selectUser, setSelectUser] = useState();
  const onSelectUser = useCallback(() => {}, []);
  return { onSelectUser, selectUser };
};
