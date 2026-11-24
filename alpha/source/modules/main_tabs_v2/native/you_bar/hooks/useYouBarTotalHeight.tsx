// Module ID: 16514
// Function ID: 16515
// Name: useYouBarTotalHeight
// Dependencies: [16511, 16510, 16515, 2]
// Exports: useYouBarTotalHeight

// Module 16514 (useYouBarTotalHeight)
import useYouBarMargins from "useYouBarMargins" /* 16510 */;
import YouBarConstants from "YouBarConstants" /* 16511 */;
import useConnectionBannerHeight from "useConnectionBannerHeight" /* 16515 */;
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
