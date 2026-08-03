// Module ID: 9506
// Function ID: 9507
// Name: EMOJI_PICKER_ACTION_SHEET_KEY
// Dependencies: [1877, 9507, 4223, 9508, 1959, 2]
// Exports: openEmojiPickerActionSheet

// Module 9506 (EMOJI_PICKER_ACTION_SHEET_KEY)
import { EmojiInteractionPoint } from "set";

const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = require(9507) /* toggleGuildExpandedState */.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = require(9507) /* toggleGuildExpandedState */;
  importDefault(4223).openLazy(require(1959) /* asyncRequireImpl */(9508, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
