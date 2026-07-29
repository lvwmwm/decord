// Module ID: 9336
// Function ID: 9337
// Name: EMOJI_PICKER_ACTION_SHEET_KEY
// Dependencies: [1877, 9337, 4157, 9338, 1959, 2]
// Exports: openEmojiPickerActionSheet

// Module 9336 (EMOJI_PICKER_ACTION_SHEET_KEY)
import { EmojiInteractionPoint } from "set";

const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = require(9337) /* toggleGuildExpandedState */.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = require(9337) /* toggleGuildExpandedState */;
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(9338, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
