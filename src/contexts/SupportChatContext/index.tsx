import React, { createContext, ReactNode, useContext } from "react";
import { useSupportChatContext } from "./useSupportChatContext";
import { SupportChatConfig } from "../../types";

export const AppSupportChatContext = createContext(
  {} as ReturnType<typeof useSupportChatContext>
);

export const AppSupportChatProvider = ({
  children,
  config,
}: {
  children: ReactNode;
  config: SupportChatConfig;
}) => {
  const value = useSupportChatContext(config);
  return (
    <AppSupportChatContext.Provider value={value}>
      {children}
    </AppSupportChatContext.Provider>
  );
};
export const useSupportChat = () => {
  const context = useContext(AppSupportChatContext);
  if (!context) {
    throw new Error(
      "useSupportChat must be used within an AppSupportChatProvider"
    );
  }
  return context;
};
