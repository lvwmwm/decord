// Module ID: 15773
// Function ID: 15774
// Name: useSecureFramesVerifiedUserIds
// Dependencies: [9063, 586, 2]
// Exports: useSecureFramesVerifiedUserIds

// Module 15773 (useSecureFramesVerifiedUserIds)
import initialize from "initialize" /* 586 */;
import closure_2 from "initialize" /* 9063 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [closure_2];
  return initialize.useStateFromStoresArray(items, () => userIds.getUserIds());
};
