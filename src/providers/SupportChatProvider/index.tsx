import React, { memo, ReactNode } from "react";

interface SupportChatProviderProps {
  children: ReactNode;
}

export const SupportChatProvider = memo((props: SupportChatProviderProps) => {
  const { children } = props;
  return <div style={{ background: "red" }}>{children}</div>;
});
