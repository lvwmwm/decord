// Module ID: 15356
// Function ID: 15357
// Name: useYouBarTotalHeight
// Dependencies: [15354, 558, 15353, 15357, 2]

// Module 15356 (useYouBarTotalHeight)
import useYouBarMargins from "useYouBarMargins" /* 15353 */;
import YouBarConstants from "YouBarConstants" /* 15354 */;
import useConnectionBannerHeight from "useConnectionBannerHeight" /* 15357 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const YOU_BAR_HEIGHT = YouBarConstants.YOU_BAR_HEIGHT;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let num = 0;
  if (undefined !== arg0) {
    num = arg0;
  }
  const youBarBottomMargin = useYouBarMargins.useYouBarBottomMargin();
  return youBarBottomMargin + YOU_BAR_HEIGHT + useConnectionBannerHeight.useConnectionBannerHeight() + num;
}) : (() => {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const youBarBottomMargin = useYouBarMargins.useYouBarBottomMargin();
  return youBarBottomMargin + YOU_BAR_HEIGHT + useConnectionBannerHeight.useConnectionBannerHeight() + num;
});
