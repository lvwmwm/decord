// Module ID: 14806
// Function ID: 14807
// Name: shouldAgeVerifyForDMDefaultOff
// Dependencies: [3963, 5123, 4500, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 14806 (shouldAgeVerifyForDMDefaultOff)
const result = require("useAgeVerificationRunner").fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = require(3963) /* isFeatureAgeGated */;
  const isFeatureAgeGatedResult = require(3963) /* isFeatureAgeGated */.isFeatureAgeGated(require(5123) /* AgeGatedFeature */.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = require(4500) /* useAgeVerificationRunner */;
  return require(4500) /* useAgeVerificationRunner */.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
