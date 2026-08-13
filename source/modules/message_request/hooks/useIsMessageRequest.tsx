// Module ID: 10300
// Function ID: 10301
// Name: useIsMessageRequest
// Dependencies: [5881, 5882, 589, 2]
// Exports: useIsEitherTypeOfMessageRequest, useIsMessageRequest

// Module 10300 (useIsMessageRequest)
import processChannel from "processChannel";
import closure_3 from "processChannel";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/message_request/hooks/useIsMessageRequest.tsx");

export const useIsMessageRequest = function useIsMessageRequest(id) {
  const _require = id;
  const items = [processChannel];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => outer1_2.isMessageRequest(closure_0), items1);
};
export const useIsEitherTypeOfMessageRequest = function useIsEitherTypeOfMessageRequest(arg0) {
  const _require = arg0;
  const items = [processChannel, closure_3];
  return _require(589).useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let isMessageRequestResult = outer1_2.isMessageRequest(tmp);
      if (!isMessageRequestResult) {
        isMessageRequestResult = outer1_3.isSpam(tmp);
      }
      tmp2 = isMessageRequestResult;
    }
    return tmp2;
  });
};
