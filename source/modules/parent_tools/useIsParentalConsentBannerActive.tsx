// Module ID: 13638
// Function ID: 103359
// Name: useIsParentalConsentBannerActive
// Dependencies: []
// Exports: useIsParentalConsentBannerActive

// Module 13638 (useIsParentalConsentBannerActive)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/parent_tools/useIsParentalConsentBannerActive.tsx");

export const useIsParentalConsentBannerActive = function useIsParentalConsentBannerActive() {
  const parentalConsentWarning = require(dependencyMap[0]).useParentalConsentWarning();
  let hasItem;
  if (null != parentalConsentWarning) {
    const surfaces = parentalConsentWarning.surfaces;
    if (null != surfaces) {
      hasItem = surfaces.includes(require(dependencyMap[1]).ParentalConsentWarningSurface.BANNER);
    }
  }
  return true === hasItem;
};
