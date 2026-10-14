// Module ID: 11582
// Function ID: 11583
// Name: openCustomTypingIndicatorAnnounceActionSheet
// Dependencies: [4854, 11583, 1987, 2]
// Exports: openCustomTypingIndicatorAnnounceActionSheet

// Module 11582 (openCustomTypingIndicatorAnnounceActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
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
  obj.openLazy(asyncRequire(11583, dependencyMap.paths), CustomTypingIndicatorAnnounceActionSheet, obj2);
};
