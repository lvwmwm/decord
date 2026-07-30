// Module ID: 10298
// Function ID: 10299
// Name: context
// Dependencies: [19, 2]
// Exports: useInAppNotificationContext

// Module 10298 (context)
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
