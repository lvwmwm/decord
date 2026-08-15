// Module ID: 15021
// Function ID: 15022
// Name: shouldAgeVerifyForDMDefaultOff
// Dependencies: [4072, 5039, 4992, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 15021 (shouldAgeVerifyForDMDefaultOff)
const result = require("useAgeVerificationRunner").fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = require(4072) /* isFeatureAgeGated */;
  const isFeatureAgeGatedResult = require(4072) /* isFeatureAgeGated */.isFeatureAgeGated(require(5039) /* AgeGatedFeature */.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = require(4992) /* useAgeVerificationRunner */;
  return require(4992) /* useAgeVerificationRunner */.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
