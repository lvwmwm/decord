// Module ID: 8531
// Function ID: 8532
// Name: EMOJI_PICKER_ACTION_SHEET_KEY
// Dependencies: [1877, 8532, 4223, 8533, 1959, 2]
// Exports: openEmojiPickerActionSheet

// Module 8531 (EMOJI_PICKER_ACTION_SHEET_KEY)
import { EmojiInteractionPoint } from "set";

const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = require(8532) /* toggleGuildExpandedState */.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = require(8532) /* toggleGuildExpandedState */;
  importDefault(4223).openLazy(require(1959) /* asyncRequireImpl */(8533, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
