// Module ID: 13996
// Function ID: 107178
// Name: useYouBarHorizontalMargin
// Dependencies: [13997, 1557, 478, 1324, 3834, 689, 2]
// Exports: useYouBarBottomMargin, useYouBarHorizontalMargin

// Module 13996 (useYouBarHorizontalMargin)
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT";

let closure_3;
let closure_4;
let closure_5;
({ YOU_BAR_MARGIN_IOS: closure_3, YOU_BAR_MARGIN: closure_4, YOU_BAR_FLOATING_OFFSET_MINIMUM: closure_5 } = CONNECTION_BANNER_HEIGHT);
const result = require("isWindows").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx");

export const useYouBarHorizontalMargin = function useYouBarHorizontalMargin() {
  if (importDefault(1557)().bottom > 0) {
    if (obj.isIOS()) {
      let tmp3 = closure_3;
    }
    return tmp3;
  }
  tmp3 = closure_4;
};
export const useYouBarBottomMargin = function useYouBarBottomMargin() {
  const bottom = importDefault(1557)().bottom;
  require(3834) /* map */;
  if (tmp) {
    const _Math2 = Math;
    let bound = Math.max(tmp3, bottom);
  } else {
    if (bottom > 0) {
      if (obj.isIOS()) {
        bound = closure_3;
      }
      obj = require(478) /* isWindows */;
    }
    const _Math = Math;
    bound = Math.max(closure_5, bottom);
  }
  return bound;
};
