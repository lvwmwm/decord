// Module ID: 10099
// Function ID: 78212
// Name: InappropriateConversationsDefaultOn
// Dependencies: []
// Exports: isEligibleForInappropriateConversationDefaultOn, useIsEligibleForInappropriateConversationDefaultOn

// Module 10099 (InappropriateConversationsDefaultOn)
const obj = { y: 1, DateToSystemTimezoneSetter: null, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const tmp2 = importDefault(dependencyMap[0])(obj);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/self_mod/inappropriate_conversation/InappropriateConversationsDefaultOn.tsx");

export const InappropriateConversationsDefaultOn = tmp2;
export const isEligibleForInappropriateConversationDefaultOn = function isEligibleForInappropriateConversationDefaultOn(location) {
  return tmp2.getConfig({ location: location.location }).enabled;
};
export const useIsEligibleForInappropriateConversationDefaultOn = function useIsEligibleForInappropriateConversationDefaultOn(location) {
  return tmp2.useConfig({ location: location.location }).enabled;
};
