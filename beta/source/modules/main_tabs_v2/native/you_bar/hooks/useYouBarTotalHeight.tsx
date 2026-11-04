// Module ID: 17077
// Function ID: 17078
// Name: useYouBarTotalHeight
// Dependencies: [17075, 17074, 17078, 2]
// Exports: useYouBarTotalHeight

// Module 17077 (useYouBarTotalHeight)
import useYouBarMargins from "useYouBarMargins" /* 17074 */;
import YouBarConstants from "YouBarConstants" /* 17075 */;
import useConnectionBannerHeight from "useConnectionBannerHeight" /* 17078 */;
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
