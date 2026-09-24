// Module ID: 15436
// Function ID: 15437
// Name: useYouBarTotalHeight
// Dependencies: [15434, 15433, 15437, 2]
// Exports: useYouBarTotalHeight

// Module 15436 (useYouBarTotalHeight)
import useYouBarMargins from "useYouBarMargins" /* 15433 */;
import YouBarConstants from "YouBarConstants" /* 15434 */;
import useConnectionBannerHeight from "useConnectionBannerHeight" /* 15437 */;
import size from "module_2" /* 2 */;

const YOU_BAR_HEIGHT = YouBarConstants.YOU_BAR_HEIGHT;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = function useYouBarTotalHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const youBarBottomMargin = useYouBarMargins.useYouBarBottomMargin();
  return youBarBottomMargin + YOU_BAR_HEIGHT + useConnectionBannerHeight.useConnectionBannerHeight() + num;
};
