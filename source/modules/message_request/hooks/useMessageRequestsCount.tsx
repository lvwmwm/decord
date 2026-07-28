// Module ID: 15676
// Function ID: 120711
// Name: useMessageRequestsCount
// Dependencies: [5637, 566, 2]
// Exports: useMessageRequestsCount

// Module 15676 (useMessageRequestsCount)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = function useMessageRequestsCount() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getMessageRequestsCount());
};
