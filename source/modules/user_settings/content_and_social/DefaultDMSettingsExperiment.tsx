// Module ID: 14976
// Function ID: 14977
// Name: shouldAgeVerifyForDMDefaultOff
// Dependencies: [4040, 5203, 4582, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 14976 (shouldAgeVerifyForDMDefaultOff)
const result = require("useAgeVerificationRunner").fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = require(4040) /* isFeatureAgeGated */;
  const isFeatureAgeGatedResult = require(4040) /* isFeatureAgeGated */.isFeatureAgeGated(require(5203) /* AgeGatedFeature */.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = require(4582) /* useAgeVerificationRunner */;
  return require(4582) /* useAgeVerificationRunner */.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
