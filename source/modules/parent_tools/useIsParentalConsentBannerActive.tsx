// Module ID: 13875
// Function ID: 106222
// Name: useIsParentalConsentBannerActive
// Dependencies: [13876, 13878, 2]
// Exports: useIsParentalConsentBannerActive

// Module 13875 (useIsParentalConsentBannerActive)
const result = require("set").fileFinishedImporting("modules/parent_tools/useIsParentalConsentBannerActive.tsx");

export const useIsParentalConsentBannerActive = function useIsParentalConsentBannerActive() {
  const parentalConsentWarning = require(13876) /* useParentalConsentWarning */.useParentalConsentWarning();
  let hasItem;
  if (null != parentalConsentWarning) {
    const surfaces = parentalConsentWarning.surfaces;
    if (null != surfaces) {
      hasItem = surfaces.includes(require(13878) /* frozen */.ParentalConsentWarningSurface.BANNER);
    }
  }
  return true === hasItem;
};
