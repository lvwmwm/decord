// Module ID: 14418
// Function ID: 108757
// Name: shouldAgeVerifyForDMDefaultOff
// Dependencies: []
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 14418 (shouldAgeVerifyForDMDefaultOff)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = require(dependencyMap[0]);
  const isFeatureAgeGatedResult = require(dependencyMap[0]).isFeatureAgeGated(require(dependencyMap[1]).AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = require(dependencyMap[2]);
  return require(dependencyMap[2]).shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
