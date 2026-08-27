// Module ID: 15228
// Function ID: 15229
// Name: useSecureFramesVerifiedUserIds
// Dependencies: [9744, 589, 2]
// Exports: useSecureFramesVerifiedUserIds

// Module 15228 (useSecureFramesVerifiedUserIds)
import initialize from "initialize" /* 589 */;
import closure_2 from "initialize" /* 9744 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [closure_2];
  return initialize.useStateFromStoresArray(items, () => userIds.getUserIds());
};
