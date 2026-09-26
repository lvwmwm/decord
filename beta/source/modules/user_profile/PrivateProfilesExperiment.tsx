// Module ID: 13415
// Function ID: 13416
// Name: PrivateProfilesExperiment
// Dependencies: [1434, 13416, 13417, 2]
// Exports: getIsInPrivateProfilesExperiment, useIsInPrivateProfilesExperiment

// Module 13415 (PrivateProfilesExperiment)
import PrivateProfilesStrictExperiment from "PrivateProfilesStrictExperiment" /* 13416 */;
import PrivateProfilesStrictGbExperiment from "PrivateProfilesStrictGbExperiment" /* 13417 */;
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-private-profiles", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/user_profile/PrivateProfilesExperiment.tsx");

export const PrivateProfilesExperiment = apexExperiment;
export const useIsInPrivateProfilesExperiment = function useIsInPrivateProfilesExperiment(UserProfilePrivacyNotice) {
  let enabled = apexExperiment.useConfig({ location: UserProfilePrivacyNotice }).enabled;
  const isInPrivateProfilesStrictExperiment = PrivateProfilesStrictExperiment.useIsInPrivateProfilesStrictExperiment(UserProfilePrivacyNotice);
  const obj = { location: UserProfilePrivacyNotice };
  const isInPrivateProfilesStrictGbExperiment = PrivateProfilesStrictGbExperiment.useIsInPrivateProfilesStrictGbExperiment(UserProfilePrivacyNotice);
  if (!enabled) {
    enabled = isInPrivateProfilesStrictExperiment;
  }
  if (!enabled) {
    enabled = isInPrivateProfilesStrictGbExperiment;
  }
  return enabled;
};
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
