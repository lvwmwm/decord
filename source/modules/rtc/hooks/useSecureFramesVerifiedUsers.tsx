// Module ID: 14640
// Function ID: 14641
// Name: useSecureFramesVerifiedUserIds
// Dependencies: [8872, 589, 2]
// Exports: useSecureFramesVerifiedUserIds

// Module 14640 (useSecureFramesVerifiedUserIds)
import initialize from "initialize";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [initialize];
  return require(589) /* initialize */.useStateFromStoresArray(items, () => userIds.getUserIds());
};
