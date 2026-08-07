// Module ID: 14822
// Function ID: 14823
// Name: shouldAgeVerifyForDMDefaultOff
// Dependencies: [3980, 5140, 4517, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 14822 (shouldAgeVerifyForDMDefaultOff)
const result = require("useAgeVerificationRunner").fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = require(3980) /* isFeatureAgeGated */;
  const isFeatureAgeGatedResult = require(3980) /* isFeatureAgeGated */.isFeatureAgeGated(require(5140) /* AgeGatedFeature */.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = require(4517) /* useAgeVerificationRunner */;
  return require(4517) /* useAgeVerificationRunner */.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
