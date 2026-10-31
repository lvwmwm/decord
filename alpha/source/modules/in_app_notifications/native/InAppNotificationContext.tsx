// Module ID: 11066
// Function ID: 11067
// Name: InAppNotificationContext
// Dependencies: [19, 2]
// Exports: useInAppNotificationContext

// Module 11066 (InAppNotificationContext)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let context = react.createContext(undefined);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationContext.tsx");

export const InAppNotificationContext = context;
export function useInAppNotificationContext() {
  context = react.useContext(context);
  if (null == context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("useInAppNotificationContext must be used within provider of InAppNotificationContext");
    throw error;
  } else {
    return context;
  }
}
