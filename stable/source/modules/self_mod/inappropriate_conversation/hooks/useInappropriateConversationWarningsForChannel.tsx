// Module ID: 11267
// Function ID: 11268
// Name: useInappropriateConversationWarningsForChannel
// Dependencies: [11208, 504, 2]
// Exports: useInappropriateConversationWarningsForChannel

// Module 11267 (useInappropriateConversationWarningsForChannel)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 11208 */;

const require = globalThis.__r;

const require = fn;
const SafetyWarningTypes = fn(11208).SafetyWarningTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx");

export const useInappropriateConversationWarningsForChannel = function useInappropriateConversationWarningsForChannel(channelId) {
  _require = channelId;
  const items = [ChannelSafetyWarningsStore];
  const items1 = [channelId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelSafetyWarningsStore.getChannelSafetyWarnings(closure_0), items1);
  return stateFromStores.filter((type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2);
};
