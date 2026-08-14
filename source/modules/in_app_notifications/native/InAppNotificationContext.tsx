// Module ID: 9876
// Function ID: 9877
// Name: context
// Dependencies: [19, 2]
// Exports: useInAppNotificationContext

// Module 9876 (context)
import importAllResult from "noop";

let c0 = importAllResult;
let context = importAllResult.createContext(undefined);
const result = require("set").fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationContext.tsx");

export const InAppNotificationContext = context;
export const useInAppNotificationContext = function useInAppNotificationContext() {
  context = importAllResult.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useInAppNotificationContext must be used within provider of InAppNotificationContext");
    throw error;
  } else {
    return context;
  }
};
