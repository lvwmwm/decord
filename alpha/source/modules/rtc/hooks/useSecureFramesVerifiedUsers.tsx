// Module ID: 18140
// Function ID: 18141
// Name: useSecureFramesVerifiedUsers
// Dependencies: [9394, 504, 2]
// Exports: useSecureFramesVerifiedUserIds

// Module 18140 (useSecureFramesVerifiedUsers)
import get_initialized from "get initialized" /* 504 */;
import VerifiedKeyStore from "VerifiedKeyStore" /* 9394 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export function useSecureFramesVerifiedUserIds() {
  let userIds;
  const items = [VerifiedKeyStore];
  const obj = get_initialized;
  return obj.useStateFromStoresArray(items, () => userIds.getUserIds());
}
