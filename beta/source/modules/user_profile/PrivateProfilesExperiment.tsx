// Module ID: 13425
// Function ID: 13426
// Name: PrivateProfilesExperiment
// Dependencies: [1438, 558, 568, 13426, 13427, 2]
// Exports: getIsInPrivateProfilesExperiment

// Module 13425 (PrivateProfilesExperiment)
import c from "c" /* 568 */;
import PrivateProfilesStrictExperiment from "PrivateProfilesStrictExperiment" /* 13426 */;
import PrivateProfilesStrictGbExperiment from "PrivateProfilesStrictGbExperiment" /* 13427 */;
import ApexExperiment from "ApexExperiment" /* 1438 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-private-profiles", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/user_profile/PrivateProfilesExperiment.tsx");

export const PrivateProfilesExperiment = apexExperiment;
export const useIsInPrivateProfilesExperiment = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  let enabled = apexExperiment.useConfig(tmp4).enabled;
  const isInPrivateProfilesStrictExperiment = PrivateProfilesStrictExperiment.useIsInPrivateProfilesStrictExperiment(location);
  const tmpResult = PrivateProfilesStrictExperiment;
  const isInPrivateProfilesStrictGbExperiment = PrivateProfilesStrictGbExperiment.useIsInPrivateProfilesStrictGbExperiment(location);
  if (!enabled) {
    enabled = isInPrivateProfilesStrictExperiment;
  }
  if (!enabled) {
    enabled = isInPrivateProfilesStrictGbExperiment;
  }
  return enabled;
}) : ((location) => {
  let enabled = apexExperiment.useConfig({ location }).enabled;
  const isInPrivateProfilesStrictExperiment = PrivateProfilesStrictExperiment.useIsInPrivateProfilesStrictExperiment(location);
  const obj = { location };
  const isInPrivateProfilesStrictGbExperiment = PrivateProfilesStrictGbExperiment.useIsInPrivateProfilesStrictGbExperiment(location);
  if (!enabled) {
    enabled = isInPrivateProfilesStrictExperiment;
  }
  if (!enabled) {
    enabled = isInPrivateProfilesStrictGbExperiment;
  }
  return enabled;
});
export const getIsInPrivateProfilesExperiment = function getIsInPrivateProfilesExperiment(ProfilePrivacySetting) {
  let enabled = apexExperiment.getConfig({ location: ProfilePrivacySetting }).enabled;
  if (!enabled) {
    enabled = PrivateProfilesStrictExperiment.getIsInPrivateProfilesStrictExperiment(ProfilePrivacySetting);
  }
  if (!enabled) {
    enabled = PrivateProfilesStrictGbExperiment.getIsInPrivateProfilesStrictGbExperiment(ProfilePrivacySetting);
  }
  return enabled;
};
