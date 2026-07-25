// Module ID: 10367
// Function ID: 80032
// Name: useIsSpamMessageRequest
// Dependencies: [5603, 566, 2]
// Exports: useIsSpamMessageRequest

// Module 10367 (useIsSpamMessageRequest)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useIsSpamMessageRequest.tsx");

export const useIsSpamMessageRequest = function useIsSpamMessageRequest(id) {
  const _require = id;
  const items = [_isNativeReflectConstruct];
  const items1 = [id];
  return _require(566).useStateFromStores(items, () => outer1_2.isSpam(closure_0), items1);
};
