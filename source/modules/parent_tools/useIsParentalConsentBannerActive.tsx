// Module ID: 13830
// Function ID: 106044
// Name: useIsParentalConsentBannerActive
// Dependencies: [13831, 13833, 2]
// Exports: useIsParentalConsentBannerActive

// Module 13830 (useIsParentalConsentBannerActive)
const result = require("set").fileFinishedImporting("modules/parent_tools/useIsParentalConsentBannerActive.tsx");

export const useIsParentalConsentBannerActive = function useIsParentalConsentBannerActive() {
  const parentalConsentWarning = require(13831) /* useParentalConsentWarning */.useParentalConsentWarning();
  let hasItem;
  if (null != parentalConsentWarning) {
    const surfaces = parentalConsentWarning.surfaces;
    if (null != surfaces) {
      hasItem = surfaces.includes(require(13833) /* frozen */.ParentalConsentWarningSurface.BANNER);
    }
  }
  return true === hasItem;
};
