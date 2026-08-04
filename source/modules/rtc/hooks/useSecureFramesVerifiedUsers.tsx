// Module ID: 14764
// Function ID: 14765
// Name: useSecureFramesVerifiedUserIds
// Dependencies: [9115, 589, 2]
// Exports: useSecureFramesVerifiedUserIds

// Module 14764 (useSecureFramesVerifiedUserIds)
import initialize from "initialize";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [initialize];
  return require(589) /* initialize */.useStateFromStoresArray(items, () => userIds.getUserIds());
};
