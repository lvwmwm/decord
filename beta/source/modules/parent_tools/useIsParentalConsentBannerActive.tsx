// Module ID: 16175
// Function ID: 16176
// Name: useIsParentalConsentBannerActive
// Dependencies: [16176, 16178, 2]
// Exports: useIsParentalConsentBannerActive

// Module 16175 (useIsParentalConsentBannerActive)
import useParentalConsentWarning from "useParentalConsentWarning" /* 16176 */;
import size from "module_2" /* 2 */;

let tmp;
const ParentalConsentWarningTypes = tmp(16178);
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
