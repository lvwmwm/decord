// Module ID: 14634
// Function ID: 14635
// Name: useYouBarTotalHeight
// Dependencies: [14632, 14631, 14635, 2]
// Exports: useYouBarTotalHeight

// Module 14634 (useYouBarTotalHeight)
import set from "set" /* 2 */;
import useYouBarHorizontalMargin from "useYouBarHorizontalMargin" /* 14631 */;
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT" /* 14632 */;
import useConnectionBannerHeight from "useConnectionBannerHeight" /* 14635 */;

const YOU_BAR_HEIGHT = CONNECTION_BANNER_HEIGHT.YOU_BAR_HEIGHT;
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = function useYouBarTotalHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const youBarBottomMargin = useYouBarHorizontalMargin.useYouBarBottomMargin();
  const obj = useYouBarHorizontalMargin;
  return youBarBottomMargin + YOU_BAR_HEIGHT + useConnectionBannerHeight.useConnectionBannerHeight() + num;
};
