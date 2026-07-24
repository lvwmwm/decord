// Module ID: 10139
// Function ID: 78446
// Name: InappropriateConversationsDefaultOn
// Dependencies: [1325, 2]
// Exports: isEligibleForInappropriateConversationDefaultOn, useIsEligibleForInappropriateConversationDefaultOn

// Module 10139 (InappropriateConversationsDefaultOn)
const obj = { name: "2026-04-inappropriate-conversations-default-on", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const tmp2 = require("getUnitId")(obj);
let closure_0 = tmp2;
const result = require("set").fileFinishedImporting("modules/self_mod/inappropriate_conversation/InappropriateConversationsDefaultOn.tsx");

export const InappropriateConversationsDefaultOn = tmp2;
export const isEligibleForInappropriateConversationDefaultOn = function isEligibleForInappropriateConversationDefaultOn(location) {
  return tmp2.getConfig({ location: location.location }).enabled;
};
export const useIsEligibleForInappropriateConversationDefaultOn = function useIsEligibleForInappropriateConversationDefaultOn(location) {
  return tmp2.useConfig({ location: location.location }).enabled;
};
