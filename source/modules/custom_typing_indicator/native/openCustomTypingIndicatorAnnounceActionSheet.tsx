// Module ID: 11769
// Function ID: 11770
// Name: openCustomTypingIndicatorAnnounceActionSheet
// Dependencies: [4445, 11770, 2008, 2]
// Exports: openCustomTypingIndicatorAnnounceActionSheet

// Module 11769 (openCustomTypingIndicatorAnnounceActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
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
  obj.openLazy(asyncRequireImpl(11770, dependencyMap.paths), CustomTypingIndicatorAnnounceActionSheet, obj);
};
