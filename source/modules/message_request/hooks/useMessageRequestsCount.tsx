// Module ID: 15451
// Function ID: 117884
// Name: useMessageRequestsCount
// Dependencies: []
// Exports: useMessageRequestsCount

// Module 15451 (useMessageRequestsCount)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = function useMessageRequestsCount() {
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
};
