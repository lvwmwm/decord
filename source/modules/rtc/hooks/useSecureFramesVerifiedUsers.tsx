// Module ID: 14515
// Function ID: 110792
// Name: useSecureFramesVerifiedUserIds
// Dependencies: [8881, 566, 2]
// Exports: useSecureFramesVerifiedUserIds

// Module 14515 (useSecureFramesVerifiedUserIds)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStoresArray(items, () => outer1_2.getUserIds());
};
