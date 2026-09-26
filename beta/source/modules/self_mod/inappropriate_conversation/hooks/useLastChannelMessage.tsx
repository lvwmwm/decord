// Module ID: 11682
// Function ID: 11683
// Name: useLastChannelMessage
// Dependencies: [5008, 504, 2]
// Exports: useLastChannelMessage

// Module 11682 (useLastChannelMessage)
import MessageStore from "MessageStore" /* 5008 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useLastChannelMessage.tsx");

export const useLastChannelMessage = function useLastChannelMessage(channelId) {
  _require = channelId;
  const items = [MessageStore];
  return require("initialize").useStateFromStores(items, () => {
    let lastNonCurrentUserMessage = MessageStore.getLastNonCurrentUserMessage(closure_0);
    if (lastNonCurrentUserMessage == null) {
      lastNonCurrentUserMessage = MessageStore.getLastMessage(closure_0);
    }
    return lastNonCurrentUserMessage;
  });
};
