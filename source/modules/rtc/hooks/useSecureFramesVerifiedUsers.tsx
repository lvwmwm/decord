// Module ID: 14576
// Function ID: 111242
// Name: useSecureFramesVerifiedUserIds
// Dependencies: [8808, 566, 2]
// Exports: useSecureFramesVerifiedUserIds

// Module 14576 (useSecureFramesVerifiedUserIds)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStoresArray(items, () => outer1_2.getUserIds());
};
