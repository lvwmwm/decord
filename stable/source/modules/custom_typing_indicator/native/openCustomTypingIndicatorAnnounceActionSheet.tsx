// Module ID: 11326
// Function ID: 11327
// Name: openCustomTypingIndicatorAnnounceActionSheet
// Dependencies: [4801, 11327, 1987, 2]
// Exports: openCustomTypingIndicatorAnnounceActionSheet

// Module 11326 (openCustomTypingIndicatorAnnounceActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import size from "module_2" /* 2 */;

const CustomTypingIndicatorAnnounceActionSheet = "CustomTypingIndicatorAnnounceActionSheet";
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx");

export const openCustomTypingIndicatorAnnounceActionSheet = function openCustomTypingIndicatorAnnounceActionSheet() {
  let obj = ActionSheetActionCreatorsDefault;
  const obj2 = {
    markAsDismissed() {
      const obj = ActionSheetActionCreatorsDefault;
      return obj.hideActionSheet(CustomTypingIndicatorAnnounceActionSheet);
    }
  };
  obj.openLazy(asyncRequire(11327, dependencyMap.paths), CustomTypingIndicatorAnnounceActionSheet, obj2);
};
