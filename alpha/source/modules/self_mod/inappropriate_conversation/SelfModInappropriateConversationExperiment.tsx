// Module ID: 11237
// Function ID: 11238
// Name: SelfModInappropriateConversationExperiment
// Dependencies: [1449, 2]
// Exports: isEligibleForInappropriateConversationWarning, useIsEligibleForInappropriateConversationWarning

// Module 11237 (SelfModInappropriateConversationExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-04-inappropriate-conversations-prescan", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const tmp2 = apex_ApexExperimentDefault(obj);
let closure_0 = tmp2;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/SelfModInappropriateConversationExperiment.tsx");

export const InappropriateConversationExperiment = tmp2;
export function isEligibleForInappropriateConversationWarning(location) {
  const obj = { location: location.location };
  return closure_0.getConfig(obj).enabled;
}
export function useIsEligibleForInappropriateConversationWarning(location) {
  const obj = { location: location.location };
  return closure_0.useConfig(obj).enabled;
}
