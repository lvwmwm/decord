// Module ID: 14026
// Function ID: 14027
// Name: useIsParentalConsentBannerActive
// Dependencies: [14027, 14029, 2]
// Exports: useIsParentalConsentBannerActive

// Module 14026 (useIsParentalConsentBannerActive)
const result = require("set").fileFinishedImporting("modules/parent_tools/useIsParentalConsentBannerActive.tsx");

export const useIsParentalConsentBannerActive = function useIsParentalConsentBannerActive() {
  const parentalConsentWarning = require(14027) /* useParentalConsentWarning */.useParentalConsentWarning();
  let hasItem;
  if (parentalConsentWarning != null) {
    const surfaces = parentalConsentWarning.surfaces;
    if (surfaces != null) {
      hasItem = surfaces.includes(require(14029) /* frozen */.ParentalConsentWarningSurface.BANNER);
    }
  }
  return true === hasItem;
};
