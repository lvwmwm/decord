// Module ID: 13891
// Function ID: 13892
// Name: useIsParentalConsentBannerActive
// Dependencies: [13892, 13894, 2]
// Exports: useIsParentalConsentBannerActive

// Module 13891 (useIsParentalConsentBannerActive)
const result = require("set").fileFinishedImporting("modules/parent_tools/useIsParentalConsentBannerActive.tsx");

export const useIsParentalConsentBannerActive = function useIsParentalConsentBannerActive() {
  const parentalConsentWarning = require(13892) /* useParentalConsentWarning */.useParentalConsentWarning();
  let hasItem;
  if (parentalConsentWarning != null) {
    const surfaces = parentalConsentWarning.surfaces;
    if (surfaces != null) {
      hasItem = surfaces.includes(require(13894) /* frozen */.ParentalConsentWarningSurface.BANNER);
    }
  }
  return true === hasItem;
};
