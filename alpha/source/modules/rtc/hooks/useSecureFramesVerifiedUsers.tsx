// Module ID: 16185
// Function ID: 16186
// Name: useSecureFramesVerifiedUsers
// Dependencies: [9960, 504, 2]
// Exports: useSecureFramesVerifiedUserIds

// Module 16185 (useSecureFramesVerifiedUsers)
import initialize from "initialize" /* 504 */;
import VerifiedKeyStore from "VerifiedKeyStore" /* 9960 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [VerifiedKeyStore];
  return initialize.useStateFromStoresArray(items, () => userIds.getUserIds());
};
