// Module ID: 13885
// Function ID: 105041
// Name: useYouBarTotalHeight
// Dependencies: []
// Exports: useYouBarTotalHeight

// Module 13885 (useYouBarTotalHeight)
const YOU_BAR_HEIGHT = require(dependencyMap[0]).YOU_BAR_HEIGHT;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx");

export const useYouBarTotalHeight = function useYouBarTotalHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const youBarBottomMargin = require(dependencyMap[1]).useYouBarBottomMargin();
  const obj = require(dependencyMap[1]);
  return youBarBottomMargin + YOU_BAR_HEIGHT + require(dependencyMap[2]).useConnectionBannerHeight() + num;
};
