// Module ID: 17072
// Function ID: 17073
// Name: useYouBarTotalHeight
// Dependencies: [17070, 17069, 17073, 2]
// Exports: useYouBarTotalHeight

// Module 17072 (useYouBarTotalHeight)
import useYouBarMargins from "useYouBarMargins" /* 17069 */;
import YouBarConstants from "YouBarConstants" /* 17070 */;
import useConnectionBannerHeight from "useConnectionBannerHeight" /* 17073 */;
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
