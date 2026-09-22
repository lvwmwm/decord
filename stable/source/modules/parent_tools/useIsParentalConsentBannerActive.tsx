// Module ID: 14955
// Function ID: 14956
// Name: useIsParentalConsentBannerActive
// Dependencies: [14956, 14958, 2]
// Exports: useIsParentalConsentBannerActive

// Module 14955 (useIsParentalConsentBannerActive)
import useParentalConsentWarning from "useParentalConsentWarning" /* 14956 */;
import ParentalConsentWarningTypes from "ParentalConsentWarningTypes" /* 14958 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/useIsParentalConsentBannerActive.tsx");

export const useIsParentalConsentBannerActive = function useIsParentalConsentBannerActive() {
  const parentalConsentWarning = useParentalConsentWarning.useParentalConsentWarning();
  let hasItem;
  if (parentalConsentWarning != null) {
    const surfaces = parentalConsentWarning.surfaces;
    if (surfaces != null) {
      hasItem = surfaces.includes(ParentalConsentWarningTypes.ParentalConsentWarningSurface.BANNER);
    }
  }
  return true === hasItem;
};
