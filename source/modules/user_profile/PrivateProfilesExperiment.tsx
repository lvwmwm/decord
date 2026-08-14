// Module ID: 12555
// Function ID: 12556
// Name: apexExperiment
// Dependencies: [1471, 12556, 12557, 2]
// Exports: getIsInPrivateProfilesExperiment, useIsInPrivateProfilesExperiment

// Module 12555 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-private-profiles", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("apexExperiment").fileFinishedImporting("modules/user_profile/PrivateProfilesExperiment.tsx");

export const PrivateProfilesExperiment = apexExperiment;
export const useIsInPrivateProfilesExperiment = function useIsInPrivateProfilesExperiment(UserProfilePrivacyNotice) {
  let enabled = apexExperiment.useConfig({ location: UserProfilePrivacyNotice }).enabled;
  const isInPrivateProfilesStrictExperiment = require(12556) /* apexExperiment */.useIsInPrivateProfilesStrictExperiment(UserProfilePrivacyNotice);
  const obj = { location: UserProfilePrivacyNotice };
  const obj2 = require(12556) /* apexExperiment */;
  const isInPrivateProfilesStrictGbExperiment = require(12557) /* apexExperiment */.useIsInPrivateProfilesStrictGbExperiment(UserProfilePrivacyNotice);
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
    enabled = require(12556) /* apexExperiment */.getIsInPrivateProfilesStrictExperiment(ProfilePrivacySetting);
    const obj2 = require(12556) /* apexExperiment */;
  }
  if (!enabled) {
    enabled = require(12557) /* apexExperiment */.getIsInPrivateProfilesStrictGbExperiment(ProfilePrivacySetting);
    const obj3 = require(12557) /* apexExperiment */;
  }
  return enabled;
};
