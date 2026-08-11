// Module ID: 14350
// Function ID: 14351
// Name: useYouBarTotalHeight
// Dependencies: [14348, 14347, 14351, 2]
// Exports: useYouBarTotalHeight

// Module 14350 (useYouBarTotalHeight)
import { YOU_BAR_HEIGHT } from "CONNECTION_BANNER_HEIGHT";

const result = require("useConnectionBannerHeight").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = function useYouBarTotalHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const youBarBottomMargin = require(14347) /* useYouBarHorizontalMargin */.useYouBarBottomMargin();
  const obj = require(14347) /* useYouBarHorizontalMargin */;
  return youBarBottomMargin + YOU_BAR_HEIGHT + require(14351) /* useConnectionBannerHeight */.useConnectionBannerHeight() + num;
};
