// Module ID: 15616
// Function ID: 120383
// Name: useSpamMessageRequestCount
// Dependencies: [5603, 566, 2]
// Exports: useSpamMessageRequestCount

// Module 15616 (useSpamMessageRequestCount)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = function useSpamMessageRequestCount() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getSpamChannelsCount());
};
