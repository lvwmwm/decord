// Module ID: 5481
// Function ID: 5482
// Name: RemoveMemberVerificationRouteExperiment
// Dependencies: [1469, 2]
// Exports: getIsMemberVerificationRouteDeprecated, useIsMemberVerificationRouteDeprecated

// Module 5481 (RemoveMemberVerificationRouteExperiment)
import getUnitIdDefault from "getUnitId" /* 1469 */;

const obj = { 1: null };
obj[1] = { isDeprecated: true };
const tmp2 = getUnitIdDefault({ name: "2026-07-rm-member-verification-route", kind: "user", defaultConfig: { isDeprecated: false }, variations: obj });
let closure_0 = tmp2;
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationRouteExperiment.tsx");

export const RemoveMemberVerificationRouteExperiment = tmp2;
export const getIsMemberVerificationRouteDeprecated = function getIsMemberVerificationRouteDeprecated(transitionToMemberVerification) {
  return closure_0.getConfig({ location: transitionToMemberVerification }).isDeprecated;
};
export const useIsMemberVerificationRouteDeprecated = function useIsMemberVerificationRouteDeprecated(MainNavigator) {
  return closure_0.useConfig({ location: MainNavigator }).isDeprecated;
};
