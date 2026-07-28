// Module ID: 14646
// Function ID: 111581
// Name: shouldAgeVerifyForDMDefaultOff
// Dependencies: [3844, 4991, 4382, 2]
// Exports: shouldAgeVerifyForDMDefaultOff

// Module 14646 (shouldAgeVerifyForDMDefaultOff)
const result = require("isReactiveCheckEnabled").fileFinishedImporting("modules/user_settings/content_and_social/DefaultDMSettingsExperiment.tsx");

export const shouldAgeVerifyForDMDefaultOff = function shouldAgeVerifyForDMDefaultOff() {
  const obj = require(3844) /* isFeatureAgeGated */;
  const isFeatureAgeGatedResult = require(3844) /* isFeatureAgeGated */.isFeatureAgeGated(require(4991) /* AgeGatedFeature */.AgeGatedFeature.DM_PRIVACY_SETTINGS);
  const obj2 = require(4382) /* isReactiveCheckEnabled */;
  return require(4382) /* isReactiveCheckEnabled */.shouldShowTiggerPawtect() && isFeatureAgeGatedResult;
};
