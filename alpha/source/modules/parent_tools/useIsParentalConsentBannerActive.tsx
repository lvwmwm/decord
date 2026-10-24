// Module ID: 16152
// Function ID: 16153
// Name: useIsParentalConsentBannerActive
// Dependencies: [558, 576, 16153, 16155, 2]

// Module 16152 (useIsParentalConsentBannerActive)
import react from "react" /* 576 */;
import useParentalConsentWarning from "useParentalConsentWarning" /* 16153 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const ParentalConsentWarningTypes = tmp(16155);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsParentalConsentBannerActive() {
  let tmp7;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = useParentalConsentWarning;
  const parentalConsentWarning = obj2.useParentalConsentWarning();
  let surfaces1;
  const first = cResult[0];
  if (parentalConsentWarning != null) {
    surfaces1 = parentalConsentWarning.surfaces;
  }
  if (first !== surfaces1) {
    let hasItem;
    if (parentalConsentWarning != null) {
      const surfaces = parentalConsentWarning.surfaces;
      if (surfaces != null) {
        hasItem = surfaces.includes(ParentalConsentWarningTypes.ParentalConsentWarningSurface.BANNER);
      }
    }
    let surfaces2;
    if (parentalConsentWarning != null) {
      surfaces2 = parentalConsentWarning.surfaces;
    }
    cResult[0] = surfaces2;
    cResult[1] = hasItem;
    tmp7 = hasItem;
  } else {
    tmp7 = cResult[1];
  }
  return true === tmp7;
}) : (function useIsParentalConsentBannerActive() {
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
});
const result = size.fileFinishedImporting("modules/parent_tools/useIsParentalConsentBannerActive.tsx");

export const useIsParentalConsentBannerActive = tmp2;
