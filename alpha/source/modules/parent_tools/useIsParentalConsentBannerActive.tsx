// Module ID: 16714
// Function ID: 16715
// Name: useIsParentalConsentBannerActive
// Dependencies: [16715, 16717, 2]
// Exports: useIsParentalConsentBannerActive

// Module 16714 (useIsParentalConsentBannerActive)
import useParentalConsentWarning from "useParentalConsentWarning" /* 16715 */;
import size from "module_2" /* 2 */;

let tmp;
const ParentalConsentWarningTypes = tmp(16717);
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
