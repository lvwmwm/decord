// Module ID: 10277
// Function ID: 10278
// Name: useInappropriateConversationWarningsForChannel
// Dependencies: [9603, 589, 2]
// Exports: useInappropriateConversationWarningsForChannel

// Module 10277 (useInappropriateConversationWarningsForChannel)
import handleConnectionOpen from "handleConnectionOpen";
import { SafetyWarningTypes } from "handleConnectionOpen";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx");

export const useInappropriateConversationWarningsForChannel = function useInappropriateConversationWarningsForChannel(channelId) {
  const _require = channelId;
  const items = [handleConnectionOpen];
  const items1 = [channelId];
  const stateFromStores = _require(589).useStateFromStores(items, () => outer1_2.getChannelSafetyWarnings(closure_0), items1);
  return stateFromStores.filter((type) => type.type === obj.INAPPROPRIATE_CONVERSATION_TIER_1 || type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2);
};
