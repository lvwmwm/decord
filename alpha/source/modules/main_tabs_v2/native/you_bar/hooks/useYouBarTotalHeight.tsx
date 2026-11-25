// Module ID: 16635
// Function ID: 16636
// Name: useYouBarTotalHeight
// Dependencies: [16632, 16631, 16636, 2]
// Exports: useYouBarTotalHeight

// Module 16635 (useYouBarTotalHeight)
import useYouBarMargins from "useYouBarMargins" /* 16631 */;
import YouBarConstants from "YouBarConstants" /* 16632 */;
import useConnectionBannerHeight from "useConnectionBannerHeight" /* 16636 */;
import size from "module_2" /* 2 */;

const YOU_BAR_HEIGHT = YouBarConstants.YOU_BAR_HEIGHT;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export function useYouBarTotalHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const obj = useYouBarMargins;
  const youBarBottomMargin = obj.useYouBarBottomMargin();
  const obj2 = useConnectionBannerHeight;
  return youBarBottomMargin + YOU_BAR_HEIGHT + obj2.useConnectionBannerHeight() + num;
}
