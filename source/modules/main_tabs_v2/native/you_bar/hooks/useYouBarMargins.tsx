// Module ID: 13875
// Function ID: 104982
// Name: useYouBarHorizontalMargin
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: useYouBarBottomMargin, useYouBarHorizontalMargin

// Module 13875 (useYouBarHorizontalMargin)
import result from "result";

({ YOU_BAR_MARGIN_IOS: closure_3, YOU_BAR_MARGIN: closure_4, YOU_BAR_FLOATING_OFFSET_MINIMUM: closure_5 } = result);
const _module1 = require(dependencyMap[6]);
result = _module1.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarMargins.tsx");

export const useYouBarHorizontalMargin = function useYouBarHorizontalMargin() {
  if (importDefault(dependencyMap[1])().bottom > 0) {
    if (obj.isIOS()) {
      let tmp3 = closure_3;
    }
    return tmp3;
  }
  tmp3 = closure_4;
};
export const useYouBarBottomMargin = function useYouBarBottomMargin() {
  const bottom = importDefault(dependencyMap[1])().bottom;
  require(dependencyMap[4]);
  if (tmp) {
    const _Math2 = Math;
    let bound = Math.max(tmp3, bottom);
  } else {
    if (bottom > 0) {
      if (obj.isIOS()) {
        bound = closure_3;
      }
      const obj = require(dependencyMap[2]);
    }
    const _Math = Math;
    bound = Math.max(closure_5, bottom);
  }
  return bound;
};
