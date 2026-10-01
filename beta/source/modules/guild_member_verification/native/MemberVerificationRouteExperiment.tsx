// Module ID: 5838
// Function ID: 5839
// Name: MemberVerificationRouteExperiment
// Dependencies: [1436, 2]
// Exports: getIsMemberVerificationRouteDeprecated, useIsMemberVerificationRouteDeprecated

// Module 5838 (MemberVerificationRouteExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1436 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-07-rm-member-verification-route", kind: "user", defaultConfig: { isDeprecated: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { isDeprecated: true };
const tmp2 = apex_ApexExperimentDefault(obj);
let closure_0 = tmp2;
const result = size.fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationRouteExperiment.tsx");

export const RemoveMemberVerificationRouteExperiment = tmp2;
export const getIsMemberVerificationRouteDeprecated = function getIsMemberVerificationRouteDeprecated(transitionToMemberVerification) {
  const obj = { location: transitionToMemberVerification };
  return closure_0.getConfig(obj).isDeprecated;
};
export const useIsMemberVerificationRouteDeprecated = function useIsMemberVerificationRouteDeprecated(MainNavigator) {
  const obj = { location: MainNavigator };
  return closure_0.useConfig(obj).isDeprecated;
};
