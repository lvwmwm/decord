// Module ID: 16357
// Function ID: 16358
// Name: useYouBarTotalHeight
// Dependencies: [16355, 16354, 16358, 2]
// Exports: useYouBarTotalHeight

// Module 16357 (useYouBarTotalHeight)
import useYouBarMargins from "useYouBarMargins" /* 16354 */;
import YouBarConstants from "YouBarConstants" /* 16355 */;
import useConnectionBannerHeight from "useConnectionBannerHeight" /* 16358 */;
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
