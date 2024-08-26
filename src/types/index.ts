import { FirebaseOptions } from "firebase/app";
export type SupportChatFirebaseConfig = FirebaseOptions;
export type SupportChatConfig = {
  userToken: string;
  firebaseConfig: SupportChatFirebaseConfig;
};
