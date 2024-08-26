import React, { memo, ReactNode } from "react";
import { SupportChatConfig } from "../../types";
import { AppSupportChatProvider } from "../../contexts";
import { X } from "../../components";

interface SupportChatProviderProps {
  children: ReactNode;
  config: SupportChatConfig;
}

export const SupportChatProvider = memo((props: SupportChatProviderProps) => {
  const { children, config } = props;
  return (
    <AppSupportChatProvider config={config}>
      <div id="firebase-support-chat-wrapper">
        {children}
        <X />
      </div>
    </AppSupportChatProvider>
  );
});
