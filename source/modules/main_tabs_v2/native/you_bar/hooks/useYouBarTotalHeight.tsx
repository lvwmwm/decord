// Module ID: 14256
// Function ID: 14257
// Name: useYouBarTotalHeight
// Dependencies: [14254, 14253, 14257, 2]
// Exports: useYouBarTotalHeight

// Module 14256 (useYouBarTotalHeight)
import { YOU_BAR_HEIGHT } from "CONNECTION_BANNER_HEIGHT";

const result = require("useConnectionBannerHeight").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = function useYouBarTotalHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const youBarBottomMargin = require(14253) /* useYouBarHorizontalMargin */.useYouBarBottomMargin();
  const obj = require(14253) /* useYouBarHorizontalMargin */;
  return youBarBottomMargin + YOU_BAR_HEIGHT + require(14257) /* useConnectionBannerHeight */.useConnectionBannerHeight() + num;
};
