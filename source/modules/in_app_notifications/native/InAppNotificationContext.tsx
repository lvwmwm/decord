// Module ID: 10160
// Function ID: 10161
// Name: context
// Dependencies: [19, 2]
// Exports: useInAppNotificationContext

// Module 10160 (context)
import importAllResult from "noop" /* 19 */;

let c0 = importAllResult;
let context = importAllResult.createContext(undefined);
const result = require("set").fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationContext.tsx");

export const InAppNotificationContext = context;
export const useInAppNotificationContext = function useInAppNotificationContext() {
  context = importAllResult.useContext(context);
  if (null == context) {
    const _Error = Error;
    error = new Error("useInAppNotificationContext must be used within provider of InAppNotificationContext");
    throw error;
  } else {
    return context;
  }
};
