// Module ID: 10168
// Function ID: 78648
// Name: useLastChannelMessage
// Dependencies: [4349, 566, 2]
// Exports: useLastChannelMessage

// Module 10168 (useLastChannelMessage)
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
