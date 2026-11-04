// Module ID: 17312
// Function ID: 17313
// Name: useYouBarTotalHeight
// Dependencies: [17310, 17309, 17313, 2]
// Exports: useYouBarTotalHeight

// Module 17312 (useYouBarTotalHeight)
import useYouBarMargins from "useYouBarMargins" /* 17309 */;
import YouBarConstants from "YouBarConstants" /* 17310 */;
import useConnectionBannerHeight from "useConnectionBannerHeight" /* 17313 */;
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
