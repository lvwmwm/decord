// Module ID: 17395
// Function ID: 17396
// Name: useIsParentalConsentBannerActive
// Dependencies: [17396, 17398, 2]
// Exports: useIsParentalConsentBannerActive

// Module 17395 (useIsParentalConsentBannerActive)
import useParentalConsentWarning from "useParentalConsentWarning" /* 17396 */;
import size from "module_2" /* 2 */;

let tmp;
const ParentalConsentWarningTypes = tmp(17398);
const result = size.fileFinishedImporting("modules/parent_tools/useIsParentalConsentBannerActive.tsx");

export function useIsParentalConsentBannerActive() {
  const obj = useParentalConsentWarning;
  const parentalConsentWarning = obj.useParentalConsentWarning();
  let hasItem;
  if (parentalConsentWarning != null) {
    const surfaces = parentalConsentWarning.surfaces;
    if (surfaces != null) {
      hasItem = surfaces.includes(ParentalConsentWarningTypes.ParentalConsentWarningSurface.BANNER);
    }
  }
  return true === hasItem;
}
