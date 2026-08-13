// Module ID: 8686
// Function ID: 8687
// Name: EMOJI_PICKER_ACTION_SHEET_KEY
// Dependencies: [1925, 8687, 4310, 8688, 2007, 2]
// Exports: openEmojiPickerActionSheet

// Module 8686 (EMOJI_PICKER_ACTION_SHEET_KEY)
import { EmojiInteractionPoint } from "set";

const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = require(8687) /* toggleGuildExpandedState */.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = require(8687) /* toggleGuildExpandedState */;
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(8688, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
