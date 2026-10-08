// Module ID: 11661
// Function ID: 11662
// Name: openCustomTypingIndicatorAnnounceActionSheet
// Dependencies: [5054, 11662, 1999, 2]
// Exports: openCustomTypingIndicatorAnnounceActionSheet

// Module 11661 (openCustomTypingIndicatorAnnounceActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const CustomTypingIndicatorAnnounceActionSheet = "CustomTypingIndicatorAnnounceActionSheet";
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx");

export const openCustomTypingIndicatorAnnounceActionSheet = function openCustomTypingIndicatorAnnounceActionSheet(analyticsLocations) {
  let obj = ActionSheetActionCreatorsDefault;
  const obj2 = {
    analyticsLocations,
    markAsDismissed() {
      const obj = ActionSheetActionCreatorsDefault;
      return obj.hideActionSheet(CustomTypingIndicatorAnnounceActionSheet);
    }
  };
  obj.openLazy(asyncRequire(11662, dependencyMap.paths), CustomTypingIndicatorAnnounceActionSheet, obj2);
};
