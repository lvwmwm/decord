// Module ID: 10383
// Function ID: 10384
// Name: useShouldShowInitialSafetyToolsButtonTooltip
// Dependencies: [9673, 10382, 589, 2]
// Exports: useShouldShowInitialSafetyToolsButtonTooltip

// Module 10383 (useShouldShowInitialSafetyToolsButtonTooltip)
import handleConnectionOpen from "handleConnectionOpen";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx");

export const useShouldShowInitialSafetyToolsButtonTooltip = function useShouldShowInitialSafetyToolsButtonTooltip(channelId) {
  const _require = channelId;
  const inappropriateConversationSafetyToolsWarningForChannel = _require(10382).useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  const obj = _require(10382);
  const items = [handleConnectionOpen];
  const obj2 = _require(589);
  return null != inappropriateConversationSafetyToolsWarningForChannel && !_require(589).useStateFromStores(items, () => outer1_2.hasShownInitialTooltipForChannel(closure_0));
};
