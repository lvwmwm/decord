// Module ID: 17435
// Function ID: 17436
// Name: useYouBarTotalHeight
// Dependencies: [17433, 17432, 17436, 2]
// Exports: useYouBarTotalHeight

// Module 17435 (useYouBarTotalHeight)
import useYouBarMargins from "useYouBarMargins" /* 17432 */;
import YouBarConstants from "YouBarConstants" /* 17433 */;
import useConnectionBannerHeight from "useConnectionBannerHeight" /* 17436 */;
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
