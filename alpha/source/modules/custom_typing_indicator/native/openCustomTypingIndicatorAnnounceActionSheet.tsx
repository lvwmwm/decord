// Module ID: 13953
// Function ID: 13954
// Name: openCustomTypingIndicatorAnnounceActionSheet
// Dependencies: [5382, 13954, 2123, 2]
// Exports: openCustomTypingIndicatorAnnounceActionSheet

// Module 13953 (openCustomTypingIndicatorAnnounceActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
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
  obj.openLazy(asyncRequire(13954, dependencyMap.paths), CustomTypingIndicatorAnnounceActionSheet, obj2);
}
