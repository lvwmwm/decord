// Module ID: 12115
// Function ID: 94924
// Name: apexExperiment
// Dependencies: [1428, 12116, 12117, 2]
// Exports: getIsInPrivateProfilesExperiment, useIsInPrivateProfilesExperiment

// Module 12115 (apexExperiment)
import ApexExperiment from "ApexExperiment";

let obj = { name: "2026-02-private-profiles", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("apexExperiment").fileFinishedImporting("modules/user_profile/PrivateProfilesExperiment.tsx");

export const PrivateProfilesExperiment = apexExperiment;
export const useIsInPrivateProfilesExperiment = function useIsInPrivateProfilesExperiment(PrivateProfileCoachmark) {
  let enabled = apexExperiment.useConfig({ location: PrivateProfileCoachmark }).enabled;
  const isInPrivateProfilesStrictExperiment = require(12116) /* apexExperiment */.useIsInPrivateProfilesStrictExperiment(PrivateProfileCoachmark);
  const obj = { location: PrivateProfileCoachmark };
  const obj2 = require(12116) /* apexExperiment */;
  const isInPrivateProfilesStrictGbExperiment = require(12117) /* apexExperiment */.useIsInPrivateProfilesStrictGbExperiment(PrivateProfileCoachmark);
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
    enabled = require(12116) /* apexExperiment */.getIsInPrivateProfilesStrictExperiment(ProfilePrivacySetting);
    const obj2 = require(12116) /* apexExperiment */;
  }
  if (!enabled) {
    enabled = require(12117) /* apexExperiment */.getIsInPrivateProfilesStrictGbExperiment(ProfilePrivacySetting);
    const obj3 = require(12117) /* apexExperiment */;
  }
  return enabled;
};
