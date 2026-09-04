// Module ID: 11328
// Function ID: 11329
// Name: useShouldShowInitialSafetyToolsButtonTooltip
// Dependencies: [10846, 11327, 586, 2]
// Exports: useShouldShowInitialSafetyToolsButtonTooltip

// Module 11328 (useShouldShowInitialSafetyToolsButtonTooltip)
import closure_2 from "handleConnectionOpen" /* 10846 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx");

export const useShouldShowInitialSafetyToolsButtonTooltip = function useShouldShowInitialSafetyToolsButtonTooltip(channelId) {
  const _require = channelId;
  const inappropriateConversationSafetyToolsWarningForChannel = _require(11327).useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  const obj = _require(11327);
  const items = [closure_2];
  const obj2 = _require(586);
  return null != inappropriateConversationSafetyToolsWarningForChannel && !_require(586).useStateFromStores(items, () => closure_1_2.hasShownInitialTooltipForChannel(closure_0));
};
