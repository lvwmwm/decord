// Module ID: 18255
// Function ID: 18256
// Name: useSecureFramesVerifiedUsers
// Dependencies: [9362, 504, 2]
// Exports: useSecureFramesVerifiedUserIds

// Module 18255 (useSecureFramesVerifiedUsers)
import get_initialized from "get initialized" /* 504 */;
import VerifiedKeyStore from "VerifiedKeyStore" /* 9362 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export function useSecureFramesVerifiedUserIds() {
  let userIds;
  const items = [VerifiedKeyStore];
  const obj = get_initialized;
  return obj.useStateFromStoresArray(items, () => userIds.getUserIds());
}
