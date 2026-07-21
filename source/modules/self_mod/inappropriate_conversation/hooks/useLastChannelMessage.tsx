// Module ID: 10127
// Function ID: 78401
// Name: useLastChannelMessage
// Dependencies: []
// Exports: useLastChannelMessage

// Module 10127 (useLastChannelMessage)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useLastChannelMessage.tsx");

export const useLastChannelMessage = function useLastChannelMessage(channelId) {
  const arg1 = channelId;
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => {
    let lastNonCurrentUserMessage = authStore.getLastNonCurrentUserMessage(arg0);
    if (null == lastNonCurrentUserMessage) {
      lastNonCurrentUserMessage = authStore.getLastMessage(arg0);
    }
    return lastNonCurrentUserMessage;
  });
};
