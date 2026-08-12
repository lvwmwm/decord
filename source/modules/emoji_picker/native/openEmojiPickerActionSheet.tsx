// Module ID: 8682
// Function ID: 8683
// Name: EMOJI_PICKER_ACTION_SHEET_KEY
// Dependencies: [1925, 8683, 4312, 8684, 2007, 2]
// Exports: openEmojiPickerActionSheet

// Module 8682 (EMOJI_PICKER_ACTION_SHEET_KEY)
import { EmojiInteractionPoint } from "set";

const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = require(8683) /* toggleGuildExpandedState */.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = require(8683) /* toggleGuildExpandedState */;
  importDefault(4312).openLazy(require(2007) /* asyncRequireImpl */(8684, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
