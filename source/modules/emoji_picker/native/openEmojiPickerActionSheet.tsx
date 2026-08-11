// Module ID: 8643
// Function ID: 8644
// Name: EMOJI_PICKER_ACTION_SHEET_KEY
// Dependencies: [1925, 8644, 4271, 8645, 2007, 2]
// Exports: openEmojiPickerActionSheet

// Module 8643 (EMOJI_PICKER_ACTION_SHEET_KEY)
import { EmojiInteractionPoint } from "set";

const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = require(8644) /* toggleGuildExpandedState */.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = require(8644) /* toggleGuildExpandedState */;
  importDefault(4271).openLazy(require(2007) /* asyncRequireImpl */(8645, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
