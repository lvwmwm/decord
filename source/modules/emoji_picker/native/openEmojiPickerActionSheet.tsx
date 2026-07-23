// Module ID: 9326
// Function ID: 72857
// Name: EMOJI_PICKER_ACTION_SHEET_KEY
// Dependencies: [1852, 9327, 4098, 9328, 1934, 2]
// Exports: openEmojiPickerActionSheet

// Module 9326 (EMOJI_PICKER_ACTION_SHEET_KEY)
import { EmojiInteractionPoint } from "set";

let result = require("showActionSheet").fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = require(9327) /* toggleGuildExpandedState */.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = require(9327) /* toggleGuildExpandedState */;
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(9328, dependencyMap.paths), "EmojiPickerActionSheet", arg0, stack);
};
