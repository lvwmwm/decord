// Module ID: 10395
// Function ID: 80124
// Name: useIsMessageRequest
// Dependencies: []
// Exports: useIsEitherTypeOfMessageRequest, useIsMessageRequest

// Module 10395 (useIsMessageRequest)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/message_request/hooks/useIsMessageRequest.tsx");

export const useIsMessageRequest = function useIsMessageRequest(id) {
  const arg1 = id;
  const items = [closure_2];
  const items1 = [id];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => messageRequest.isMessageRequest(arg0), items1);
};
export const useIsEitherTypeOfMessageRequest = function useIsEitherTypeOfMessageRequest(arg0) {
  const arg1 = arg0;
  const items = [closure_2, closure_3];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    let tmp = null != arg0;
    if (tmp) {
      let isMessageRequestResult = messageRequest.isMessageRequest(arg0);
      if (!isMessageRequestResult) {
        isMessageRequestResult = spam.isSpam(arg0);
      }
      tmp = isMessageRequestResult;
    }
    return tmp;
  });
};
