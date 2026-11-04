// Module ID: 11295
// Function ID: 11296
// Name: useLastChannelMessage
// Dependencies: [6061, 504, 2]
// Exports: useLastChannelMessage

// Module 11295 (useLastChannelMessage)
import MessageStore from "MessageStore" /* 6061 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useLastChannelMessage.tsx");

export function useLastChannelMessage(channelId) {
  _require = channelId;
  let obj = require("get initialized");
  const items = [MessageStore];
  return obj.useStateFromStores(items, () => {
    let lastNonCurrentUserMessage = MessageStore.getLastNonCurrentUserMessage(channelId);
    const obj = MessageStore;
    const tmp = channelId;
    if (lastNonCurrentUserMessage == null) {
      lastNonCurrentUserMessage = obj.getLastMessage(tmp);
    }
    return lastNonCurrentUserMessage;
  });
}
