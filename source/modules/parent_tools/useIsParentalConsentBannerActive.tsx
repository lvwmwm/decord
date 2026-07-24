// Module ID: 13819
// Function ID: 105917
// Name: useIsParentalConsentBannerActive
// Dependencies: [13820, 13822, 2]
// Exports: useIsParentalConsentBannerActive

// Module 13819 (useIsParentalConsentBannerActive)
const result = require("set").fileFinishedImporting("modules/parent_tools/useIsParentalConsentBannerActive.tsx");

export const useIsParentalConsentBannerActive = function useIsParentalConsentBannerActive() {
  const parentalConsentWarning = require(13820) /* useParentalConsentWarning */.useParentalConsentWarning();
  let hasItem;
  if (null != parentalConsentWarning) {
    const surfaces = parentalConsentWarning.surfaces;
    if (null != surfaces) {
      hasItem = surfaces.includes(require(13822) /* frozen */.ParentalConsentWarningSurface.BANNER);
    }
  }
  return true === hasItem;
};
