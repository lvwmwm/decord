// Module ID: 12671
// Function ID: 12672
// Name: PrivateProfilesStrictGbExperiment
// Dependencies: [1441, 558, 576, 2]
// Exports: getIsInPrivateProfilesStrictGbExperiment

// Module 12671 (PrivateProfilesStrictGbExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1441 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-03-private-profiles-strict-gb", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true }, 2: { enabled: true }, 3: { enabled: true } } };
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
const result = size.fileFinishedImporting("modules/user_profile/PrivateProfilesStrictGbExperiment.tsx");

export const PrivateProfilesStrictGbExperiment = apexExperiment;
export const useIsInPrivateProfilesStrictGbExperiment = tmp3;
export const getIsInPrivateProfilesStrictGbExperiment = function getIsInPrivateProfilesStrictGbExperiment(location) {
  const obj = { location };
  return apexExperiment.getConfig(obj).enabled;
};
