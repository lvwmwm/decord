// Module ID: 15444
// Function ID: 117844
// Name: useSpamMessageRequestCount
// Dependencies: []
// Exports: useSpamMessageRequestCount

// Module 15444 (useSpamMessageRequestCount)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = function useSpamMessageRequestCount() {
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
};
