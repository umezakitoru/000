import { memo, VFC } from "react";

export const Home: VFC = memo(() => {
  console.log("aaaa");
  return <p>ホームページです。</p>;
});
