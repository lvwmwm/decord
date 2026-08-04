// Module ID: 14016
// Function ID: 14017
// Name: useIsParentalConsentBannerActive
// Dependencies: [14017, 14019, 2]
// Exports: useIsParentalConsentBannerActive

// Module 14016 (useIsParentalConsentBannerActive)
const result = require("set").fileFinishedImporting("modules/parent_tools/useIsParentalConsentBannerActive.tsx");

export const useIsParentalConsentBannerActive = function useIsParentalConsentBannerActive() {
  const parentalConsentWarning = require(14017) /* useParentalConsentWarning */.useParentalConsentWarning();
  let hasItem;
  if (parentalConsentWarning != null) {
    const surfaces = parentalConsentWarning.surfaces;
    if (surfaces != null) {
      hasItem = surfaces.includes(require(14019) /* frozen */.ParentalConsentWarningSurface.BANNER);
    }
  }
  return true === hasItem;
};
