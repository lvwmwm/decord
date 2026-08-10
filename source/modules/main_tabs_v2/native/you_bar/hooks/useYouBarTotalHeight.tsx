// Module ID: 14342
// Function ID: 14343
// Name: useYouBarTotalHeight
// Dependencies: [14340, 14339, 14343, 2]
// Exports: useYouBarTotalHeight

// Module 14342 (useYouBarTotalHeight)
import { YOU_BAR_HEIGHT } from "CONNECTION_BANNER_HEIGHT";

const result = require("useConnectionBannerHeight").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = function useYouBarTotalHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const youBarBottomMargin = require(14339) /* useYouBarHorizontalMargin */.useYouBarBottomMargin();
  const obj = require(14339) /* useYouBarHorizontalMargin */;
  return youBarBottomMargin + YOU_BAR_HEIGHT + require(14343) /* useConnectionBannerHeight */.useConnectionBannerHeight() + num;
};
