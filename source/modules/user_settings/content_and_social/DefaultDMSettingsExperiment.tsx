// Module ID: 14892
// Function ID: 14893
// Name: shouldAgeVerifyForDMDefaultOff
// Dependencies: [3980, 5141, 4519, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 14892 (shouldAgeVerifyForDMDefaultOff)
const result = require("useAgeVerificationRunner").fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = require(3980) /* isFeatureAgeGated */;
  const isFeatureAgeGatedResult = require(3980) /* isFeatureAgeGated */.isFeatureAgeGated(require(5141) /* AgeGatedFeature */.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = require(4519) /* useAgeVerificationRunner */;
  return require(4519) /* useAgeVerificationRunner */.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
