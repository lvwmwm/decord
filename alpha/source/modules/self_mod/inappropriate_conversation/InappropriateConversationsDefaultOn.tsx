// Module ID: 11265
// Function ID: 11266
// Name: InappropriateConversationsDefaultOn
// Dependencies: [1448, 2]
// Exports: isEligibleForInappropriateConversationDefaultOn, useIsEligibleForInappropriateConversationDefaultOn

// Module 11265 (InappropriateConversationsDefaultOn)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-04-inappropriate-conversations-default-on", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const tmp2 = apex_ApexExperimentDefault(obj);
let closure_0 = tmp2;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/InappropriateConversationsDefaultOn.tsx");

export const InappropriateConversationsDefaultOn = tmp2;
export function isEligibleForInappropriateConversationDefaultOn(location) {
  const obj = { location: location.location };
  return closure_0.getConfig(obj).enabled;
}
export function useIsEligibleForInappropriateConversationDefaultOn(location) {
  const obj = { location: location.location };
  return closure_0.useConfig(obj).enabled;
}
