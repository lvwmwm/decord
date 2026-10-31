// Module ID: 11261
// Function ID: 11262
// Name: useInappropriateConversationWarningsForChannel
// Dependencies: [10804, 504, 2]
// Exports: useInappropriateConversationWarningsForChannel

// Module 11261 (useInappropriateConversationWarningsForChannel)
import ChannelSafetyWarningsStore2 from "ChannelSafetyWarningsStore" /* 10804 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ChannelSafetyWarningsStore = ChannelSafetyWarningsStore2;
let _require;

const SafetyWarningTypes = ChannelSafetyWarningsStore2.SafetyWarningTypes;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx");

export function useInappropriateConversationWarningsForChannel(channelId) {
  _require = channelId;
  const items = [ChannelSafetyWarningsStore];
  const items1 = [channelId];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => ChannelSafetyWarningsStore.getChannelSafetyWarnings(channelId), items1);
  return stateFromStores.filter((type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2);
}
