// Module ID: 14105
// Function ID: 107825
// Name: useYouBarTotalHeight
// Dependencies: [14103, 14102, 14106, 2]
// Exports: useYouBarTotalHeight

// Module 14105 (useYouBarTotalHeight)
import { YOU_BAR_HEIGHT } from "CONNECTION_BANNER_HEIGHT";

const result = require("useConnectionBannerHeight").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = function useYouBarTotalHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const youBarBottomMargin = require(14102) /* useYouBarHorizontalMargin */.useYouBarBottomMargin();
  const obj = require(14102) /* useYouBarHorizontalMargin */;
  return youBarBottomMargin + YOU_BAR_HEIGHT + require(14106) /* useConnectionBannerHeight */.useConnectionBannerHeight() + num;
};
