// Module ID: 8637
// Function ID: 8638
// Name: EMOJI_PICKER_ACTION_SHEET_KEY
// Dependencies: [1906, 8638, 4271, 8639, 1988, 2]
// Exports: openEmojiPickerActionSheet

// Module 8637 (EMOJI_PICKER_ACTION_SHEET_KEY)
import { EmojiInteractionPoint } from "set";

const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = require(8638) /* toggleGuildExpandedState */.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = require(8638) /* toggleGuildExpandedState */;
  importDefault(4271).openLazy(require(1988) /* asyncRequireImpl */(8639, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
