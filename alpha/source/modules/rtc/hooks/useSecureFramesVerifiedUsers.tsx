// Module ID: 17340
// Function ID: 17341
// Name: useSecureFramesVerifiedUsers
// Dependencies: [9691, 504, 2]
// Exports: useSecureFramesVerifiedUserIds

// Module 17340 (useSecureFramesVerifiedUsers)
import get_initialized from "get initialized" /* 504 */;
import VerifiedKeyStore from "VerifiedKeyStore" /* 9691 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export function useSecureFramesVerifiedUserIds() {
  let userIds;
  const items = [VerifiedKeyStore];
  const obj = get_initialized;
  return obj.useStateFromStoresArray(items, () => userIds.getUserIds());
}
