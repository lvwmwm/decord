// Module ID: 16174
// Function ID: 16175
// Name: useSecureFramesVerifiedUsers
// Dependencies: [9954, 504, 2]
// Exports: useSecureFramesVerifiedUserIds

// Module 16174 (useSecureFramesVerifiedUsers)
import initialize from "initialize" /* 504 */;
import VerifiedKeyStore from "VerifiedKeyStore" /* 9954 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [VerifiedKeyStore];
  return initialize.useStateFromStoresArray(items, () => userIds.getUserIds());
};
