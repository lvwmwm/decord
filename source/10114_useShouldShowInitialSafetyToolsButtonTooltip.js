// Module ID: 10114
// Function ID: 78315
// Name: useShouldShowInitialSafetyToolsButtonTooltip
// Dependencies: []
// Exports: useShouldShowInitialSafetyToolsButtonTooltip

// Module 10114 (useShouldShowInitialSafetyToolsButtonTooltip)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx");

export const useShouldShowInitialSafetyToolsButtonTooltip = function useShouldShowInitialSafetyToolsButtonTooltip(channelId) {
  const arg1 = channelId;
  const inappropriateConversationSafetyToolsWarningForChannel = arg1(dependencyMap[1]).useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  const obj = arg1(dependencyMap[1]);
  const items = [closure_2];
  const obj2 = arg1(dependencyMap[2]);
  return null != inappropriateConversationSafetyToolsWarningForChannel && !arg1(dependencyMap[2]).useStateFromStores(items, () => closure_2.hasShownInitialTooltipForChannel(arg0));
};
