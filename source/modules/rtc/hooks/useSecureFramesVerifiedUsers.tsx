// Module ID: 14730
// Function ID: 14731
// Name: useSecureFramesVerifiedUserIds
// Dependencies: [9062, 589, 2]
// Exports: useSecureFramesVerifiedUserIds

// Module 14730 (useSecureFramesVerifiedUserIds)
import initialize from "initialize";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [initialize];
  return require(589) /* initialize */.useStateFromStoresArray(items, () => userIds.getUserIds());
};
