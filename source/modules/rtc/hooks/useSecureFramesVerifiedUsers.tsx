// Module ID: 14565
// Function ID: 111115
// Name: useSecureFramesVerifiedUserIds
// Dependencies: [8920, 566, 2]
// Exports: useSecureFramesVerifiedUserIds

// Module 14565 (useSecureFramesVerifiedUserIds)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStoresArray(items, () => outer1_2.getUserIds());
};
