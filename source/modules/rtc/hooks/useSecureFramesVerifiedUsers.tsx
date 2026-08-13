// Module ID: 14946
// Function ID: 14947
// Name: useSecureFramesVerifiedUserIds
// Dependencies: [9243, 589, 2]
// Exports: useSecureFramesVerifiedUserIds

// Module 14946 (useSecureFramesVerifiedUserIds)
import initialize from "initialize";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [initialize];
  return require(589) /* initialize */.useStateFromStoresArray(items, () => userIds.getUserIds());
};
