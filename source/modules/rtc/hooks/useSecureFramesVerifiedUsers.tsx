// Module ID: 15691
// Function ID: 15692
// Name: useSecureFramesVerifiedUserIds
// Dependencies: [9849, 586, 2]
// Exports: useSecureFramesVerifiedUserIds

// Module 15691 (useSecureFramesVerifiedUserIds)
import initialize from "initialize" /* 586 */;
import closure_2 from "initialize" /* 9849 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [closure_2];
  return initialize.useStateFromStoresArray(items, () => userIds.getUserIds());
};
