// Module ID: 14267
// Function ID: 14268
// Name: useYouBarHorizontalMargin
// Dependencies: [14268, 1609, 501, 1348, 4005, 712, 2]
// Exports: useYouBarBottomMargin, useYouBarHorizontalMargin

// Module 14267 (useYouBarHorizontalMargin)
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT";

let c3;
let c4;
let c5;
({ YOU_BAR_MARGIN_IOS: c3, YOU_BAR_MARGIN: c4, YOU_BAR_FLOATING_OFFSET_MINIMUM: c5 } = CONNECTION_BANNER_HEIGHT);
const result = require("PlatformTypes").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx");

export const useYouBarHorizontalMargin = function useYouBarHorizontalMargin() {
  if (importDefault(1609)().bottom > 0) {
    if (obj.isIOS()) {
      let tmp3 = closure_3;
    }
    return tmp3;
  }
  tmp3 = closure_4;
};
export const useYouBarBottomMargin = function useYouBarBottomMargin() {
  const bottom = importDefault(1609)().bottom;
  require(4005) /* map */;
  if (tmp2) {
    const _Math2 = Math;
    let bound = Math.max(tmp5, bottom);
  } else {
    if (bottom > 0) {
      if (tmp3Result.isIOS()) {
        bound = closure_3;
      }
      tmp3Result = require(501) /* PlatformTypes */;
    }
    const _Math = Math;
    bound = Math.max(closure_5, bottom);
  }
  return bound;
};
