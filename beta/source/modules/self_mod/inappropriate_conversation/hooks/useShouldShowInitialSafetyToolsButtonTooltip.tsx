// Module ID: 11834
// Function ID: 11835
// Name: useShouldShowInitialSafetyToolsButtonTooltip
// Dependencies: [11789, 11833, 504, 2]
// Exports: useShouldShowInitialSafetyToolsButtonTooltip

// Module 11834 (useShouldShowInitialSafetyToolsButtonTooltip)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 11789 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx");

export function useShouldShowInitialSafetyToolsButtonTooltip(channelId) {
  _require = channelId;
  const obj = require("useInappropriateConversationSafetyToolsWarningForChannel");
  const inappropriateConversationSafetyToolsWarningForChannel = obj.useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  const items = [ChannelSafetyWarningsStore];
  const obj2 = require("get initialized");
  const tmp2 = null != inappropriateConversationSafetyToolsWarningForChannel && !obj2.useStateFromStores(items, () => ChannelSafetyWarningsStore.hasShownInitialTooltipForChannel(channelId));
  return tmp2;
}
