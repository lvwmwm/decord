// Module ID: 9298
// Function ID: 9299
// Name: EMOJI_PICKER_ACTION_SHEET_KEY
// Dependencies: [1925, 9299, 4342, 9300, 2007, 2]
// Exports: openEmojiPickerActionSheet

// Module 9298 (EMOJI_PICKER_ACTION_SHEET_KEY)
import { EmojiInteractionPoint } from "set";

const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = require(9299) /* toggleGuildExpandedState */.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = require(9299) /* toggleGuildExpandedState */;
  importDefault(4342).openLazy(require(2007) /* asyncRequireImpl */(9300, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
