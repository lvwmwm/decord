// Module ID: 10097
// Function ID: 78206
// Name: InappropriateConversationExperiment
// Dependencies: []
// Exports: isEligibleForInappropriateConversationWarning, useIsEligibleForInappropriateConversationWarning

// Module 10097 (InappropriateConversationExperiment)
const tmp2 = importDefault(dependencyMap[0])({ defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } });
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/self_mod/inappropriate_conversation/SelfModInappropriateConversationExperiment.tsx");

export const InappropriateConversationExperiment = tmp2;
export const isEligibleForInappropriateConversationWarning = function isEligibleForInappropriateConversationWarning(location) {
  return tmp2.getConfig({ location: location.location }).enabled;
};
export const useIsEligibleForInappropriateConversationWarning = function useIsEligibleForInappropriateConversationWarning(location) {
  return tmp2.useConfig({ location: location.location }).enabled;
};
