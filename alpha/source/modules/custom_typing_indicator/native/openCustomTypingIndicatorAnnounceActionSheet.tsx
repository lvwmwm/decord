// Module ID: 12391
// Function ID: 12392
// Name: openCustomTypingIndicatorAnnounceActionSheet
// Dependencies: [5056, 12392, 2000, 2]
// Exports: openCustomTypingIndicatorAnnounceActionSheet

// Module 12391 (openCustomTypingIndicatorAnnounceActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
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
  obj.openLazy(asyncRequire(12392, dependencyMap.paths), CustomTypingIndicatorAnnounceActionSheet, obj2);
};
