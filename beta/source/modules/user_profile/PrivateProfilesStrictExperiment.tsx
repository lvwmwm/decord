// Module ID: 12670
// Function ID: 12671
// Name: PrivateProfilesStrictExperiment
// Dependencies: [1441, 558, 576, 2]
// Exports: getIsInPrivateProfilesStrictExperiment

// Module 12670 (PrivateProfilesStrictExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1441 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-03-private-profiles-strict", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true }, 2: { enabled: true }, 3: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
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
  return apexExperiment.useConfig(tmp2).enabled;
}) : ((location) => {
  const obj = { location };
  return apexExperiment.useConfig(obj).enabled;
});
const result = size.fileFinishedImporting("modules/user_profile/PrivateProfilesStrictExperiment.tsx");

export const PrivateProfilesStrictExperiment = apexExperiment;
export const useIsInPrivateProfilesStrictExperiment = tmp3;
export const getIsInPrivateProfilesStrictExperiment = function getIsInPrivateProfilesStrictExperiment(location) {
  const obj = { location };
  return apexExperiment.getConfig(obj).enabled;
};
