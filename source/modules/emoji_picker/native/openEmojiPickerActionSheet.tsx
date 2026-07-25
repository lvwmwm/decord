// Module ID: 9268
// Function ID: 72591
// Name: EMOJI_PICKER_ACTION_SHEET_KEY
// Dependencies: [1853, 9269, 4099, 9270, 1935, 2]
// Exports: openEmojiPickerActionSheet

// Module 9268 (EMOJI_PICKER_ACTION_SHEET_KEY)
import { EmojiInteractionPoint } from "set";

let result = require("showActionSheet").fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = require(9269) /* toggleGuildExpandedState */.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = require(9269) /* toggleGuildExpandedState */;
  importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(9270, dependencyMap.paths), "EmojiPickerActionSheet", arg0, stack);
};
