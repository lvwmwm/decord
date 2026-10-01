// Module ID: 12667
// Function ID: 12668
// Name: PrivateProfilesExperiment
// Dependencies: [1435, 12668, 12669, 2]
// Exports: getIsInPrivateProfilesExperiment, useIsInPrivateProfilesExperiment

// Module 12667 (PrivateProfilesExperiment)
import PrivateProfilesStrictExperiment from "PrivateProfilesStrictExperiment" /* 12668 */;
import PrivateProfilesStrictGbExperiment from "PrivateProfilesStrictGbExperiment" /* 12669 */;
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-02-private-profiles", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/PrivateProfilesExperiment.tsx");

export const PrivateProfilesExperiment = apexExperiment;
export const useIsInPrivateProfilesExperiment = function useIsInPrivateProfilesExperiment(UserProfilePrivacyNotice) {
  const obj = { location: UserProfilePrivacyNotice };
  let enabled = apexExperiment.useConfig(obj).enabled;
  const obj2 = PrivateProfilesStrictExperiment;
  const isInPrivateProfilesStrictExperiment = obj2.useIsInPrivateProfilesStrictExperiment(UserProfilePrivacyNotice);
  const obj3 = PrivateProfilesStrictGbExperiment;
  const isInPrivateProfilesStrictGbExperiment = obj3.useIsInPrivateProfilesStrictGbExperiment(UserProfilePrivacyNotice);
  if (!enabled) {
    enabled = isInPrivateProfilesStrictExperiment;
  }
  if (!enabled) {
    enabled = isInPrivateProfilesStrictGbExperiment;
  }
  return enabled;
};
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
