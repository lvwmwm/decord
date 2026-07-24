// Module ID: 9362
// Function ID: 73066
// Name: EMOJI_PICKER_ACTION_SHEET_KEY
// Dependencies: [1852, 9363, 4098, 9364, 1934, 2]
// Exports: openEmojiPickerActionSheet

// Module 9362 (EMOJI_PICKER_ACTION_SHEET_KEY)
import { EmojiInteractionPoint } from "set";

let result = require("showActionSheet").fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = require(9363) /* toggleGuildExpandedState */.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = require(9363) /* toggleGuildExpandedState */;
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(9364, dependencyMap.paths), "EmojiPickerActionSheet", arg0, stack);
};
