// Module ID: 12301
// Function ID: 12302
// Name: openCustomTypingIndicatorAnnounceActionSheet
// Dependencies: [4794, 12302, 1980, 2]
// Exports: openCustomTypingIndicatorAnnounceActionSheet

// Module 12301 (openCustomTypingIndicatorAnnounceActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import size from "module_2" /* 2 */;

const CustomTypingIndicatorAnnounceActionSheet = "CustomTypingIndicatorAnnounceActionSheet";
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx");

export const openCustomTypingIndicatorAnnounceActionSheet = function openCustomTypingIndicatorAnnounceActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12302, dependencyMap.paths), CustomTypingIndicatorAnnounceActionSheet, {
    markAsDismissed() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(CustomTypingIndicatorAnnounceActionSheet);
    }
  });
};
