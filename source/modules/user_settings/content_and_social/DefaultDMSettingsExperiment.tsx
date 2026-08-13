// Module ID: 14971
// Function ID: 14972
// Name: shouldAgeVerifyForDMDefaultOff
// Dependencies: [4040, 5182, 4560, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 14971 (shouldAgeVerifyForDMDefaultOff)
const result = require("useAgeVerificationRunner").fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = require(4040) /* isFeatureAgeGated */;
  const isFeatureAgeGatedResult = require(4040) /* isFeatureAgeGated */.isFeatureAgeGated(require(5182) /* AgeGatedFeature */.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = require(4560) /* useAgeVerificationRunner */;
  return require(4560) /* useAgeVerificationRunner */.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
