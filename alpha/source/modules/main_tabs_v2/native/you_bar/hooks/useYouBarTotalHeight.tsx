// Module ID: 16441
// Function ID: 16442
// Name: useYouBarTotalHeight
// Dependencies: [16439, 558, 16438, 16442, 2]

// Module 16441 (useYouBarTotalHeight)
import useYouBarMargins from "useYouBarMargins" /* 16438 */;
import YouBarConstants from "YouBarConstants" /* 16439 */;
import useConnectionBannerHeight from "useConnectionBannerHeight" /* 16442 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const YOU_BAR_HEIGHT = YouBarConstants.YOU_BAR_HEIGHT;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useYouBarTotalHeight(arg0) {
  let num = 0;
  if (undefined !== arg0) {
    num = arg0;
  }
  const obj = useYouBarMargins;
  const youBarBottomMargin = obj.useYouBarBottomMargin();
  const obj2 = useConnectionBannerHeight;
  return youBarBottomMargin + YOU_BAR_HEIGHT + obj2.useConnectionBannerHeight() + num;
}) : (function useYouBarTotalHeight() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const obj = useYouBarMargins;
  const youBarBottomMargin = obj.useYouBarBottomMargin();
  const obj2 = useConnectionBannerHeight;
  return youBarBottomMargin + YOU_BAR_HEIGHT + obj2.useConnectionBannerHeight() + num;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = tmp2;
