// Module ID: 12837
// Function ID: 12838
// Name: openCustomTypingIndicatorAnnounceActionSheet
// Dependencies: [5127, 12838, 2119, 2]
// Exports: openCustomTypingIndicatorAnnounceActionSheet

// Module 12837 (openCustomTypingIndicatorAnnounceActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const CustomTypingIndicatorAnnounceActionSheet = "CustomTypingIndicatorAnnounceActionSheet";
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx");

export function openCustomTypingIndicatorAnnounceActionSheet(analyticsLocations) {
  let obj = ActionSheetActionCreatorsDefault;
  const obj2 = {
    analyticsLocations,
    markAsDismissed() {
      const obj = ActionSheetActionCreatorsDefault;
      return obj.hideActionSheet(CustomTypingIndicatorAnnounceActionSheet);
    }
  };
  obj.openLazy(asyncRequire(12838, dependencyMap.paths), CustomTypingIndicatorAnnounceActionSheet, obj2);
}
