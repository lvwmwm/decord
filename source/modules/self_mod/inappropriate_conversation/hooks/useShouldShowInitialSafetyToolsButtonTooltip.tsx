// Module ID: 10161
// Function ID: 78591
// Name: useShouldShowInitialSafetyToolsButtonTooltip
// Dependencies: [9139, 10136, 566, 2]
// Exports: useShouldShowInitialSafetyToolsButtonTooltip

// Module 10161 (useShouldShowInitialSafetyToolsButtonTooltip)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx");

export const useShouldShowInitialSafetyToolsButtonTooltip = function useShouldShowInitialSafetyToolsButtonTooltip(channelId) {
  const _require = channelId;
  const inappropriateConversationSafetyToolsWarningForChannel = _require(10136).useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  const obj = _require(10136);
  const items = [_isNativeReflectConstruct];
  const obj2 = _require(566);
  return null != inappropriateConversationSafetyToolsWarningForChannel && !_require(566).useStateFromStores(items, () => outer1_2.hasShownInitialTooltipForChannel(closure_0));
};
