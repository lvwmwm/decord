// Module ID: 12669
// Function ID: 12670
// Name: PrivateProfilesExperiment
// Dependencies: [1441, 558, 576, 12670, 12671, 2]
// Exports: getIsInPrivateProfilesExperiment

// Module 12669 (PrivateProfilesExperiment)
import react from "react" /* 576 */;
import PrivateProfilesStrictExperiment from "PrivateProfilesStrictExperiment" /* 12670 */;
import PrivateProfilesStrictGbExperiment from "PrivateProfilesStrictGbExperiment" /* 12671 */;
import ApexExperiment from "ApexExperiment" /* 1441 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-02-private-profiles", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let tmp4;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  let enabled = apexExperiment.useConfig(tmp4).enabled;
  const tmpResult = PrivateProfilesStrictExperiment;
  const isInPrivateProfilesStrictExperiment = tmpResult.useIsInPrivateProfilesStrictExperiment(location);
  const tmpResult2 = PrivateProfilesStrictGbExperiment;
  const isInPrivateProfilesStrictGbExperiment = tmpResult2.useIsInPrivateProfilesStrictGbExperiment(location);
  if (!enabled) {
    enabled = isInPrivateProfilesStrictExperiment;
  }
  if (!enabled) {
    enabled = isInPrivateProfilesStrictGbExperiment;
  }
  return enabled;
}) : ((location) => {
  const obj = { location };
  let enabled = apexExperiment.useConfig(obj).enabled;
  const obj2 = PrivateProfilesStrictExperiment;
  const isInPrivateProfilesStrictExperiment = obj2.useIsInPrivateProfilesStrictExperiment(location);
  const obj3 = PrivateProfilesStrictGbExperiment;
  const isInPrivateProfilesStrictGbExperiment = obj3.useIsInPrivateProfilesStrictGbExperiment(location);
  if (!enabled) {
    enabled = isInPrivateProfilesStrictExperiment;
  }
  if (!enabled) {
    enabled = isInPrivateProfilesStrictGbExperiment;
  }
  return enabled;
});
const result = size.fileFinishedImporting("modules/user_profile/PrivateProfilesExperiment.tsx");

export const PrivateProfilesExperiment = apexExperiment;
export const useIsInPrivateProfilesExperiment = tmp3;
export const getIsInPrivateProfilesExperiment = function getIsInPrivateProfilesExperiment(ProfilePrivacySetting) {
  const obj = { location: ProfilePrivacySetting };
  let enabled = apexExperiment.getConfig(obj).enabled;
  if (!enabled) {
    const obj2 = PrivateProfilesStrictExperiment;
    enabled = obj2.getIsInPrivateProfilesStrictExperiment(ProfilePrivacySetting);
  }
  if (!enabled) {
    const obj3 = PrivateProfilesStrictGbExperiment;
    enabled = obj3.getIsInPrivateProfilesStrictGbExperiment(ProfilePrivacySetting);
  }
  return enabled;
};
