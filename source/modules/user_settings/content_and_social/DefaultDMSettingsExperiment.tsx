// Module ID: 14665
// Function ID: 14666
// Name: shouldAgeVerifyForDMDefaultOff
// Dependencies: [3868, 5013, 4405, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 14665 (shouldAgeVerifyForDMDefaultOff)
const result = require("useShouldCallReactiveCheck").fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = require(3868) /* isFeatureAgeGated */;
  const isFeatureAgeGatedResult = require(3868) /* isFeatureAgeGated */.isFeatureAgeGated(require(5013) /* AgeGatedFeature */.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = require(4405) /* useShouldCallReactiveCheck */;
  return require(4405) /* useShouldCallReactiveCheck */.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
