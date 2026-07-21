// Module ID: 10264
// Function ID: 79276
// Name: context
// Dependencies: []
// Exports: useInAppNotificationContext

// Module 10264 (context)
const importAllResult = importAll(dependencyMap[0]);
const context = importAllResult.createContext(undefined);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationContext.tsx");

export const InAppNotificationContext = context;
export const useInAppNotificationContext = function useInAppNotificationContext() {
  const context = importAllResult.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useInAppNotificationContext must be used within provider of InAppNotificationContext");
    throw error;
  } else {
    return context;
  }
};
