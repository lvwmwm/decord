// Module ID: 5745
// Function ID: 5746
// Name: MemberVerificationRouteExperiment
// Dependencies: [1439, 558, 568, 2]
// Exports: getIsMemberVerificationRouteDeprecated

// Module 5745 (MemberVerificationRouteExperiment)
import c from "c" /* 568 */;
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1439 */;

require = fn;
const obj = { name: "2026-07-rm-member-verification-route", kind: "user", defaultConfig: { isDeprecated: false }, variations: null };
let obj2 = { 1: null };
obj2[1] = { isDeprecated: true };
obj.variations = obj2;
let tmp2 = apex_ApexExperimentDefault(obj);
let closure_2 = tmp2;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationRouteExperiment.tsx");

export const RemoveMemberVerificationRouteExperiment = tmp2;
export const getIsMemberVerificationRouteDeprecated = function getIsMemberVerificationRouteDeprecated(transitionToMemberVerification) {
  return closure_2.getConfig({ location: transitionToMemberVerification }).isDeprecated;
};
export const useIsMemberVerificationRouteDeprecated = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).isDeprecated;
}) : ((location) => closure_2.useConfig({ location }).isDeprecated);
