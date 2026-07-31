// Module ID: 14663
// Function ID: 14664
// Name: useSecureFramesVerifiedUserIds
// Dependencies: [8885, 589, 2]
// Exports: useSecureFramesVerifiedUserIds

// Module 14663 (useSecureFramesVerifiedUserIds)
import initialize from "initialize";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [initialize];
  return require(589) /* initialize */.useStateFromStoresArray(items, () => userIds.getUserIds());
};
