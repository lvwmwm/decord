// Module ID: 10264
// Function ID: 10265
// Name: useShouldShowInitialSafetyToolsButtonTooltip
// Dependencies: [9558, 10263, 589, 2]
// Exports: useShouldShowInitialSafetyToolsButtonTooltip

// Module 10264 (useShouldShowInitialSafetyToolsButtonTooltip)
import handleConnectionOpen from "handleConnectionOpen";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx");

export const useShouldShowInitialSafetyToolsButtonTooltip = function useShouldShowInitialSafetyToolsButtonTooltip(channelId) {
  const _require = channelId;
  const inappropriateConversationSafetyToolsWarningForChannel = _require(10263).useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  const obj = _require(10263);
  const items = [handleConnectionOpen];
  const obj2 = _require(589);
  return null != inappropriateConversationSafetyToolsWarningForChannel && !_require(589).useStateFromStores(items, () => outer1_2.hasShownInitialTooltipForChannel(closure_0));
};
