// Module ID: 9312
// Function ID: 72743
// Name: EMOJI_PICKER_ACTION_SHEET_KEY
// Dependencies: [1853, 9313, 4133, 9314, 1935, 2]
// Exports: openEmojiPickerActionSheet

// Module 9312 (EMOJI_PICKER_ACTION_SHEET_KEY)
import { EmojiInteractionPoint } from "set";

let result = require("showActionSheet").fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = require(9313) /* toggleGuildExpandedState */.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = require(9313) /* toggleGuildExpandedState */;
  importDefault(4133).openLazy(require(1935) /* maybeLoadBundle */(9314, dependencyMap.paths), "EmojiPickerActionSheet", arg0, stack);
};
