// Module ID: 10378
// Function ID: 10379
// Name: useShouldShowInitialSafetyToolsButtonTooltip
// Dependencies: [9668, 10377, 589, 2]
// Exports: useShouldShowInitialSafetyToolsButtonTooltip

// Module 10378 (useShouldShowInitialSafetyToolsButtonTooltip)
import handleConnectionOpen from "handleConnectionOpen";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx");

export const useShouldShowInitialSafetyToolsButtonTooltip = function useShouldShowInitialSafetyToolsButtonTooltip(channelId) {
  const _require = channelId;
  const inappropriateConversationSafetyToolsWarningForChannel = _require(10377).useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  const obj = _require(10377);
  const items = [handleConnectionOpen];
  const obj2 = _require(589);
  return null != inappropriateConversationSafetyToolsWarningForChannel && !_require(589).useStateFromStores(items, () => outer1_2.hasShownInitialTooltipForChannel(closure_0));
};
