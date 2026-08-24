// Module ID: 11194
// Function ID: 11195
// Name: openCustomTypingIndicatorAnnounceActionSheet
// Dependencies: [4346, 11195, 2008, 2]
// Exports: openCustomTypingIndicatorAnnounceActionSheet

// Module 11194 (openCustomTypingIndicatorAnnounceActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4346 */;

const CustomTypingIndicatorAnnounceActionSheet = "CustomTypingIndicatorAnnounceActionSheet";
const result = set.fileFinishedImporting("modules/custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx");

export const openCustomTypingIndicatorAnnounceActionSheet = function openCustomTypingIndicatorAnnounceActionSheet() {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    markAsDismissed() {
      return callback(table[0]).hideActionSheet(closure_3);
    }
  };
  obj.openLazy(asyncRequireImpl(11195, dependencyMap.paths), CustomTypingIndicatorAnnounceActionSheet, obj);
};
