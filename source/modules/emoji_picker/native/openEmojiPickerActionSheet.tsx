// Module ID: 8577
// Function ID: 8578
// Name: EMOJI_PICKER_ACTION_SHEET_KEY
// Dependencies: [1906, 8578, 4270, 8579, 1988, 2]
// Exports: openEmojiPickerActionSheet

// Module 8577 (EMOJI_PICKER_ACTION_SHEET_KEY)
import { EmojiInteractionPoint } from "set";

const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = require(8578) /* toggleGuildExpandedState */.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = require(8578) /* toggleGuildExpandedState */;
  importDefault(4270).openLazy(require(1988) /* asyncRequireImpl */(8579, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
