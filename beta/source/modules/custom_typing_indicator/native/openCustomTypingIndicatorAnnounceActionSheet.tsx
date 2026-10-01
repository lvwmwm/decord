// Module ID: 11450
// Function ID: 11451
// Name: openCustomTypingIndicatorAnnounceActionSheet
// Dependencies: [4800, 11451, 1981, 2]
// Exports: openCustomTypingIndicatorAnnounceActionSheet

// Module 11450 (openCustomTypingIndicatorAnnounceActionSheet)
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
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
  obj.openLazy(asyncRequire(11451, dependencyMap.paths), CustomTypingIndicatorAnnounceActionSheet, obj2);
};
