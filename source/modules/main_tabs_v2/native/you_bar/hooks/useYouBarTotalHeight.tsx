// Module ID: 15024
// Function ID: 15025
// Name: useYouBarTotalHeight
// Dependencies: [15022, 15021, 15025, 2]
// Exports: useYouBarTotalHeight

// Module 15024 (useYouBarTotalHeight)
import set from "set" /* 2 */;
import useYouBarHorizontalMargin from "useYouBarHorizontalMargin" /* 15021 */;
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT" /* 15022 */;
import useConnectionBannerHeight from "useConnectionBannerHeight" /* 15025 */;

const YOU_BAR_HEIGHT = CONNECTION_BANNER_HEIGHT.YOU_BAR_HEIGHT;
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = function useYouBarTotalHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const youBarBottomMargin = useYouBarHorizontalMargin.useYouBarBottomMargin();
  const obj = useYouBarHorizontalMargin;
  return youBarBottomMargin + YOU_BAR_HEIGHT + useConnectionBannerHeight.useConnectionBannerHeight() + num;
};
