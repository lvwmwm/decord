// Module ID: 16179
// Function ID: 16180
// Name: useIsParentalConsentBannerActive
// Dependencies: [16180, 16182, 2]
// Exports: useIsParentalConsentBannerActive

// Module 16179 (useIsParentalConsentBannerActive)
import useParentalConsentWarning from "useParentalConsentWarning" /* 16180 */;
import size from "module_2" /* 2 */;

let tmp;
const ParentalConsentWarningTypes = tmp(16182);
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
