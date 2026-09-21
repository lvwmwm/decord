// Module ID: 13390
// Function ID: 13391
// Name: PrivateProfilesStrictExperiment
// Dependencies: [1438, 558, 568, 2]
// Exports: getIsInPrivateProfilesStrictExperiment

// Module 13390 (PrivateProfilesStrictExperiment)
import c from "c" /* 568 */;
import ApexExperiment from "ApexExperiment" /* 1438 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-private-profiles-strict", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true }, 2: { enabled: true }, 3: { enabled: true } } });
const result = size.fileFinishedImporting("modules/user_profile/PrivateProfilesStrictExperiment.tsx");

export const PrivateProfilesStrictExperiment = apexExperiment;
export const useIsInPrivateProfilesStrictExperiment = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return apexExperiment.useConfig(tmp2).enabled;
}) : ((location) => apexExperiment.useConfig({ location }).enabled);
export const getIsInPrivateProfilesStrictExperiment = function getIsInPrivateProfilesStrictExperiment(location) {
  return apexExperiment.getConfig({ location }).enabled;
};
