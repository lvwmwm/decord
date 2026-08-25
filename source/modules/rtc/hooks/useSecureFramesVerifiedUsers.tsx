// Module ID: 15085
// Function ID: 15086
// Name: useSecureFramesVerifiedUserIds
// Dependencies: [9341, 589, 2]
// Exports: useSecureFramesVerifiedUserIds

// Module 15085 (useSecureFramesVerifiedUserIds)
import initialize from "initialize" /* 589 */;
import closure_2 from "initialize" /* 9341 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [closure_2];
  return initialize.useStateFromStoresArray(items, () => userIds.getUserIds());
};
