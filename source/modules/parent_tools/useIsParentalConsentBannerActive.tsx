// Module ID: 13645
// Function ID: 103382
// Name: useIsParentalConsentBannerActive
// Dependencies: []
// Exports: useIsParentalConsentBannerActive

// Module 13645 (useIsParentalConsentBannerActive)
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
