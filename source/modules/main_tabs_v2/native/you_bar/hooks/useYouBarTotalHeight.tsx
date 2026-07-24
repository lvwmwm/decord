// Module ID: 14049
// Function ID: 107520
// Name: useYouBarTotalHeight
// Dependencies: [14047, 14046, 14050, 2]
// Exports: useYouBarTotalHeight

// Module 14049 (useYouBarTotalHeight)
import { YOU_BAR_HEIGHT } from "CONNECTION_BANNER_HEIGHT";

const result = require("useConnectionBannerHeight").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = function useYouBarTotalHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const youBarBottomMargin = require(14046) /* useYouBarHorizontalMargin */.useYouBarBottomMargin();
  const obj = require(14046) /* useYouBarHorizontalMargin */;
  return youBarBottomMargin + YOU_BAR_HEIGHT + require(14050) /* useConnectionBannerHeight */.useConnectionBannerHeight() + num;
};
