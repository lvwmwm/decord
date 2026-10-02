// Module ID: 5839
// Function ID: 5840
// Name: MemberVerificationRouteExperiment
// Dependencies: [1442, 558, 576, 2]
// Exports: getIsMemberVerificationRouteDeprecated

// Module 5839 (MemberVerificationRouteExperiment)
import react from "react" /* 576 */;
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1442 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-07-rm-member-verification-route", kind: "user", defaultConfig: { isDeprecated: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { isDeprecated: true };
let tmp2 = apex_ApexExperimentDefault(obj);
let closure_2 = tmp2;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).isDeprecated;
}) : ((location) => {
  const obj = { location };
  return closure_2.useConfig(obj).isDeprecated;
});
const result = size.fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationRouteExperiment.tsx");

export const RemoveMemberVerificationRouteExperiment = tmp2;
export const getIsMemberVerificationRouteDeprecated = function getIsMemberVerificationRouteDeprecated(transitionToMemberVerification) {
  const obj = { location: transitionToMemberVerification };
  return closure_2.getConfig(obj).isDeprecated;
};
export const useIsMemberVerificationRouteDeprecated = tmp3;
