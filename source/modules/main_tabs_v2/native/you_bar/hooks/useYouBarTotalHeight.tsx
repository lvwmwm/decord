// Module ID: 14452
// Function ID: 14453
// Name: useYouBarTotalHeight
// Dependencies: [14450, 14449, 14453, 2]
// Exports: useYouBarTotalHeight

// Module 14452 (useYouBarTotalHeight)
import { YOU_BAR_HEIGHT } from "CONNECTION_BANNER_HEIGHT";

const result = require("useConnectionBannerHeight").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = function useYouBarTotalHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const youBarBottomMargin = require(14449) /* useYouBarHorizontalMargin */.useYouBarBottomMargin();
  const obj = require(14449) /* useYouBarHorizontalMargin */;
  return youBarBottomMargin + YOU_BAR_HEIGHT + require(14453) /* useConnectionBannerHeight */.useConnectionBannerHeight() + num;
};
