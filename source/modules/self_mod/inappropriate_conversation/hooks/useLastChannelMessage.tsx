// Module ID: 10100
// Function ID: 78279
// Name: useLastChannelMessage
// Dependencies: [4350, 566, 2]
// Exports: useLastChannelMessage

// Module 10100 (useLastChannelMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useLastChannelMessage.tsx");

export const useLastChannelMessage = function useLastChannelMessage(channelId) {
  const _require = channelId;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    let lastNonCurrentUserMessage = outer1_2.getLastNonCurrentUserMessage(closure_0);
    if (null == lastNonCurrentUserMessage) {
      lastNonCurrentUserMessage = outer1_2.getLastMessage(closure_0);
    }
    return lastNonCurrentUserMessage;
  });
};
