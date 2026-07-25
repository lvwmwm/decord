// Module ID: 14601
// Function ID: 111403
// Name: shouldAgeVerifyForDMDefaultOff
// Dependencies: [3810, 4957, 4348, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 14601 (shouldAgeVerifyForDMDefaultOff)
const result = require("isReactiveCheckEnabled").fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = require(3810) /* isFeatureAgeGated */;
  const isFeatureAgeGatedResult = require(3810) /* isFeatureAgeGated */.isFeatureAgeGated(require(4957) /* AgeGatedFeature */.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = require(4348) /* isReactiveCheckEnabled */;
  return require(4348) /* isReactiveCheckEnabled */.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
