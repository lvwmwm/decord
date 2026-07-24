// Module ID: 10434
// Function ID: 80366
// Name: useIsMessageRequest
// Dependencies: [5602, 5603, 566, 2]
// Exports: useIsEitherTypeOfMessageRequest, useIsMessageRequest

// Module 10434 (useIsMessageRequest)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/message_request/hooks/useIsMessageRequest.tsx");

export const useIsMessageRequest = function useIsMessageRequest(id) {
  const _require = id;
  const items = [_isNativeReflectConstruct];
  const items1 = [id];
  return _require(566).useStateFromStores(items, () => outer1_2.isMessageRequest(closure_0), items1);
};
export const useIsEitherTypeOfMessageRequest = function useIsEitherTypeOfMessageRequest(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct, closure_3];
  return _require(566).useStateFromStores(items, () => {
    let tmp = null != closure_0;
    if (tmp) {
      let isMessageRequestResult = outer1_2.isMessageRequest(closure_0);
      if (!isMessageRequestResult) {
        isMessageRequestResult = outer1_3.isSpam(closure_0);
      }
      tmp = isMessageRequestResult;
    }
    return tmp;
  });
};
