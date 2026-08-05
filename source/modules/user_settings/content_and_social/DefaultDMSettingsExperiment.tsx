// Module ID: 14768
// Function ID: 14769
// Name: shouldAgeVerifyForDMDefaultOff
// Dependencies: [3934, 5093, 4470, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 14768 (shouldAgeVerifyForDMDefaultOff)
const result = require("useAgeVerificationRunner").fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = require(3934) /* isFeatureAgeGated */;
  const isFeatureAgeGatedResult = require(3934) /* isFeatureAgeGated */.isFeatureAgeGated(require(5093) /* AgeGatedFeature */.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = require(4470) /* useAgeVerificationRunner */;
  return require(4470) /* useAgeVerificationRunner */.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
