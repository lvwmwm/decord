// Module ID: 17118
// Function ID: 17119
// Name: useIsParentalConsentBannerActive
// Dependencies: [17119, 17121, 2]
// Exports: useIsParentalConsentBannerActive

// Module 17118 (useIsParentalConsentBannerActive)
import useParentalConsentWarning from "useParentalConsentWarning" /* 17119 */;
import size from "module_2" /* 2 */;

let tmp;
const ParentalConsentWarningTypes = tmp(17121);
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
