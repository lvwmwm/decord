// Module ID: 8560
// Function ID: 8561
// Name: EMOJI_PICKER_ACTION_SHEET_KEY
// Dependencies: [1906, 8561, 4253, 8562, 1988, 2]
// Exports: openEmojiPickerActionSheet

// Module 8560 (EMOJI_PICKER_ACTION_SHEET_KEY)
import { EmojiInteractionPoint } from "set";

const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = require(8561) /* toggleGuildExpandedState */.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = require(8561) /* toggleGuildExpandedState */;
  importDefault(4253).openLazy(require(1988) /* asyncRequireImpl */(8562, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
