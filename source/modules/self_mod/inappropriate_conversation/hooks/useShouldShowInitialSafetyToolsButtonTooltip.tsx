// Module ID: 10129
// Function ID: 78397
// Name: useShouldShowInitialSafetyToolsButtonTooltip
// Dependencies: [9101, 10104, 566, 2]
// Exports: useShouldShowInitialSafetyToolsButtonTooltip

// Module 10129 (useShouldShowInitialSafetyToolsButtonTooltip)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx");

export const useShouldShowInitialSafetyToolsButtonTooltip = function useShouldShowInitialSafetyToolsButtonTooltip(channelId) {
  const _require = channelId;
  const inappropriateConversationSafetyToolsWarningForChannel = _require(10104).useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  const obj = _require(10104);
  const items = [_isNativeReflectConstruct];
  const obj2 = _require(566);
  return null != inappropriateConversationSafetyToolsWarningForChannel && !_require(566).useStateFromStores(items, () => outer1_2.hasShownInitialTooltipForChannel(closure_0));
};
