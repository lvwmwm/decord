// Module ID: 14788
// Function ID: 14789
// Name: shouldAgeVerifyForDMDefaultOff
// Dependencies: [3964, 5108, 4500, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 14788 (shouldAgeVerifyForDMDefaultOff)
const result = require("useAgeVerificationRunner").fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = require(3964) /* isFeatureAgeGated */;
  const isFeatureAgeGatedResult = require(3964) /* isFeatureAgeGated */.isFeatureAgeGated(require(5108) /* AgeGatedFeature */.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = require(4500) /* useAgeVerificationRunner */;
  return require(4500) /* useAgeVerificationRunner */.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
