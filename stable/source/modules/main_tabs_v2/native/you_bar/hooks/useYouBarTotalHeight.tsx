// Module ID: 15370
// Function ID: 15371
// Name: useYouBarTotalHeight
// Dependencies: [15368, 15367, 15371, 2]
// Exports: useYouBarTotalHeight

// Module 15370 (useYouBarTotalHeight)
import useYouBarMargins from "useYouBarMargins" /* 15367 */;
import YouBarConstants from "YouBarConstants" /* 15368 */;
import useConnectionBannerHeight from "useConnectionBannerHeight" /* 15371 */;
import size from "module_2" /* 2 */;

const YOU_BAR_HEIGHT = YouBarConstants.YOU_BAR_HEIGHT;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = function useYouBarTotalHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const youBarBottomMargin = useYouBarMargins.useYouBarBottomMargin();
  return youBarBottomMargin + YOU_BAR_HEIGHT + useConnectionBannerHeight.useConnectionBannerHeight() + num;
};
