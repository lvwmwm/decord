// Module ID: 16693
// Function ID: 16694
// Name: useYouBarTotalHeight
// Dependencies: [16690, 16689, 16694, 2]
// Exports: useYouBarTotalHeight

// Module 16693 (useYouBarTotalHeight)
import useYouBarMargins from "useYouBarMargins" /* 16689 */;
import YouBarConstants from "YouBarConstants" /* 16690 */;
import useConnectionBannerHeight from "useConnectionBannerHeight" /* 16694 */;
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
