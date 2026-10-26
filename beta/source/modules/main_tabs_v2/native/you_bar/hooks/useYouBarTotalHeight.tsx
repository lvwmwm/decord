// Module ID: 16446
// Function ID: 16447
// Name: useYouBarTotalHeight
// Dependencies: [16444, 558, 16443, 16447, 2]

// Module 16446 (useYouBarTotalHeight)
import useYouBarMargins from "useYouBarMargins" /* 16443 */;
import YouBarConstants from "YouBarConstants" /* 16444 */;
import useConnectionBannerHeight from "useConnectionBannerHeight" /* 16447 */;
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
