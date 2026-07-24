// Module ID: 10140
// Function ID: 78449
// Name: useInappropriateConversationWarningsForChannel
// Dependencies: [9139, 566, 2]
// Exports: useInappropriateConversationWarningsForChannel

// Module 10140 (useInappropriateConversationWarningsForChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SafetyWarningTypes } from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx");

export const useInappropriateConversationWarningsForChannel = function useInappropriateConversationWarningsForChannel(channelId) {
  const _require = channelId;
  const items = [_isNativeReflectConstruct];
  const items1 = [channelId];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_2.getChannelSafetyWarnings(closure_0), items1);
  return stateFromStores.filter((type) => {
    let tmp = type.type === outer1_3.INAPPROPRIATE_CONVERSATION_TIER_1;
    if (!tmp) {
      tmp = type.type === outer1_3.INAPPROPRIATE_CONVERSATION_TIER_2;
    }
    return tmp;
  });
};
