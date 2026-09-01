// Module ID: 11540
// Function ID: 11541
// Name: openCustomTypingIndicatorAnnounceActionSheet
// Dependencies: [4445, 11541, 2009, 2]
// Exports: openCustomTypingIndicatorAnnounceActionSheet

// Module 11540 (openCustomTypingIndicatorAnnounceActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const CustomTypingIndicatorAnnounceActionSheet = "CustomTypingIndicatorAnnounceActionSheet";
const result = set.fileFinishedImporting("modules/custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx");

export const openCustomTypingIndicatorAnnounceActionSheet = function openCustomTypingIndicatorAnnounceActionSheet() {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    markAsDismissed() {
      return callback(table[0]).hideActionSheet(closure_3);
    }
  };
  obj.openLazy(asyncRequireImpl(11541, dependencyMap.paths), CustomTypingIndicatorAnnounceActionSheet, obj);
};
