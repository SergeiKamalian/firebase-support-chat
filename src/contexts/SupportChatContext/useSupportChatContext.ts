import React, { useMemo, useState } from "react";
import { SupportChatConfig } from "../../types";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const useSupportChatContext = (config: SupportChatConfig) => {
  const { firebaseConfig } = config;

  // Firebase
  const firebaseApp = useMemo(
    () => initializeApp(firebaseConfig),
    [firebaseConfig]
  );
  const firebaseDb = useMemo(() => getFirestore(firebaseApp), [firebaseApp]);

  return {
    firebaseApp,
    firebaseDb,
  };
};
