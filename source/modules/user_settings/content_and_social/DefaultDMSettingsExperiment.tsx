// Module ID: 14540
// Function ID: 110953
// Name: shouldAgeVerifyForDMDefaultOff
// Dependencies: [3809, 4956, 4347, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 14540 (shouldAgeVerifyForDMDefaultOff)
const result = require("isReactiveCheckEnabled").fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = require(3809) /* isFeatureAgeGated */;
  const isFeatureAgeGatedResult = require(3809) /* isFeatureAgeGated */.isFeatureAgeGated(require(4956) /* AgeGatedFeature */.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = require(4347) /* isReactiveCheckEnabled */;
  return require(4347) /* isReactiveCheckEnabled */.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
