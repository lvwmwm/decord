// Module ID: 14781
// Function ID: 14782
// Name: useSecureFramesVerifiedUserIds
// Dependencies: [9116, 589, 2]
// Exports: useSecureFramesVerifiedUserIds

// Module 14781 (useSecureFramesVerifiedUserIds)
import initialize from "initialize";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [initialize];
  return require(589) /* initialize */.useStateFromStoresArray(items, () => userIds.getUserIds());
};
