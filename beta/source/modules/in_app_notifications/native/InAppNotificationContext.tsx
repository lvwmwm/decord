// Module ID: 12978
// Function ID: 12979
// Name: InAppNotificationContext
// Dependencies: [19, 558, 2]

// Module 12978 (InAppNotificationContext)
import noop from "module_19" /* 19 */;

let context = noop.createContext(undefined);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationContext.tsx");

export const InAppNotificationContext = context;
export const useInAppNotificationContext = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  context = noop.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useInAppNotificationContext must be used within provider of InAppNotificationContext");
    throw error;
  } else {
    return context;
  }
}) : (() => {
  context = noop.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useInAppNotificationContext must be used within provider of InAppNotificationContext");
    throw error;
  } else {
    return context;
  }
});
