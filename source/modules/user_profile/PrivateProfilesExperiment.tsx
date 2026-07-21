// Module ID: 11993
// Function ID: 92680
// Name: apexExperiment
// Dependencies: []
// Exports: getIsInPrivateProfilesExperiment, useIsInPrivateProfilesExperiment

// Module 11993 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } });
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/user_profile/PrivateProfilesExperiment.tsx");

export const PrivateProfilesExperiment = apexExperiment;
export const useIsInPrivateProfilesExperiment = function useIsInPrivateProfilesExperiment(PrivateProfileCoachmark) {
  let enabled = apexExperiment.useConfig({ location: PrivateProfileCoachmark }).enabled;
  const isInPrivateProfilesStrictExperiment = require(dependencyMap[1]).useIsInPrivateProfilesStrictExperiment(PrivateProfileCoachmark);
  const obj = { location: PrivateProfileCoachmark };
  const obj2 = require(dependencyMap[1]);
  const isInPrivateProfilesStrictGbExperiment = require(dependencyMap[2]).useIsInPrivateProfilesStrictGbExperiment(PrivateProfileCoachmark);
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
    enabled = require(dependencyMap[1]).getIsInPrivateProfilesStrictExperiment(ProfilePrivacySetting);
    const obj2 = require(dependencyMap[1]);
  }
  if (!enabled) {
    enabled = require(dependencyMap[2]).getIsInPrivateProfilesStrictGbExperiment(ProfilePrivacySetting);
    const obj3 = require(dependencyMap[2]);
  }
  return enabled;
};
