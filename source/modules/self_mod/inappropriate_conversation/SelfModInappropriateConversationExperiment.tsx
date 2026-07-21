// Module ID: 10096
// Function ID: 78182
// Name: InappropriateConversationExperiment
// Dependencies: []
// Exports: isEligibleForInappropriateConversationWarning, useIsEligibleForInappropriateConversationWarning

// Module 10096 (InappropriateConversationExperiment)
const obj = { 9223372036854775807: 440, 0: 120, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const tmp2 = importDefault(dependencyMap[0])(obj);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/self_mod/inappropriate_conversation/SelfModInappropriateConversationExperiment.tsx");

export const InappropriateConversationExperiment = tmp2;
export const isEligibleForInappropriateConversationWarning = function isEligibleForInappropriateConversationWarning(location) {
  return tmp2.getConfig({ location: location.location }).enabled;
};
export const useIsEligibleForInappropriateConversationWarning = function useIsEligibleForInappropriateConversationWarning(location) {
  return tmp2.useConfig({ location: location.location }).enabled;
};
