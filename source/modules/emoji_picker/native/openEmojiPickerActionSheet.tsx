// Module ID: 9332
// Function ID: 9333
// Name: EMOJI_PICKER_ACTION_SHEET_KEY
// Dependencies: [1877, 9333, 4157, 9334, 1959, 2]
// Exports: openEmojiPickerActionSheet

// Module 9332 (EMOJI_PICKER_ACTION_SHEET_KEY)
import { EmojiInteractionPoint } from "set";

const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = require(9333) /* toggleGuildExpandedState */.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = require(9333) /* toggleGuildExpandedState */;
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(9334, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
