import React, { memo } from "react";
import { useSupportChat } from "../../contexts";

export const X = memo(() => {
  const x = useSupportChat();
  console.log(x);

  return <div>{5}</div>;
});
