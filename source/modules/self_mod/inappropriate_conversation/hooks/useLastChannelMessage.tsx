// Module ID: 10603
// Function ID: 10604
// Name: useLastChannelMessage
// Dependencies: [4994, 589, 2]
// Exports: useLastChannelMessage

// Module 10603 (useLastChannelMessage)
import reinjectEphemerals from "reinjectEphemerals";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useLastChannelMessage.tsx");

export const useLastChannelMessage = function useLastChannelMessage(channelId) {
  const _require = channelId;
  const items = [reinjectEphemerals];
  return _require(589).useStateFromStores(items, () => {
    let lastNonCurrentUserMessage = outer1_2.getLastNonCurrentUserMessage(closure_0);
    if (lastNonCurrentUserMessage == null) {
      lastNonCurrentUserMessage = outer1_2.getLastMessage(closure_0);
    }
    return lastNonCurrentUserMessage;
  });
};
