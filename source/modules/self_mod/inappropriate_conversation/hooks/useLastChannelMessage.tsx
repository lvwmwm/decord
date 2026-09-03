// Module ID: 11248
// Function ID: 11249
// Name: useLastChannelMessage
// Dependencies: [4736, 586, 2]
// Exports: useLastChannelMessage

// Module 11248 (useLastChannelMessage)
import closure_2 from "reinjectEphemerals" /* 4736 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useLastChannelMessage.tsx");

export const useLastChannelMessage = function useLastChannelMessage(channelId) {
  const _require = channelId;
  const items = [closure_2];
  return _require(586).useStateFromStores(items, () => {
    let lastNonCurrentUserMessage = closure_1_2.getLastNonCurrentUserMessage(closure_0);
    if (lastNonCurrentUserMessage == null) {
      lastNonCurrentUserMessage = closure_1_2.getLastMessage(closure_0);
    }
    return lastNonCurrentUserMessage;
  });
};
