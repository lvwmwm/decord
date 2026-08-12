// Module ID: 12536
// Function ID: 12537
// Name: apexExperiment
// Dependencies: [1471, 12537, 12538, 2]
// Exports: getIsInPrivateProfilesExperiment, useIsInPrivateProfilesExperiment

// Module 12536 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-private-profiles", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("apexExperiment").fileFinishedImporting("modules/user_profile/PrivateProfilesExperiment.tsx");

export const PrivateProfilesExperiment = apexExperiment;
export const useIsInPrivateProfilesExperiment = function useIsInPrivateProfilesExperiment(UserProfilePrivacyNotice) {
  let enabled = apexExperiment.useConfig({ location: UserProfilePrivacyNotice }).enabled;
  const isInPrivateProfilesStrictExperiment = require(12537) /* apexExperiment */.useIsInPrivateProfilesStrictExperiment(UserProfilePrivacyNotice);
  const obj = { location: UserProfilePrivacyNotice };
  const obj2 = require(12537) /* apexExperiment */;
  const isInPrivateProfilesStrictGbExperiment = require(12538) /* apexExperiment */.useIsInPrivateProfilesStrictGbExperiment(UserProfilePrivacyNotice);
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
    enabled = require(12537) /* apexExperiment */.getIsInPrivateProfilesStrictExperiment(ProfilePrivacySetting);
    const obj2 = require(12537) /* apexExperiment */;
  }
  if (!enabled) {
    enabled = require(12538) /* apexExperiment */.getIsInPrivateProfilesStrictGbExperiment(ProfilePrivacySetting);
    const obj3 = require(12538) /* apexExperiment */;
  }
  return enabled;
};
