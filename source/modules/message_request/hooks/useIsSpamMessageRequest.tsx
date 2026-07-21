// Module ID: 10393
// Function ID: 80108
// Name: useIsSpamMessageRequest
// Dependencies: []
// Exports: useIsSpamMessageRequest

// Module 10393 (useIsSpamMessageRequest)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/message_request/hooks/useIsSpamMessageRequest.tsx");

export const useIsSpamMessageRequest = function useIsSpamMessageRequest(id) {
  const arg1 = id;
  const items = [closure_2];
  const items1 = [id];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => spam.isSpam(arg0), items1);
};
