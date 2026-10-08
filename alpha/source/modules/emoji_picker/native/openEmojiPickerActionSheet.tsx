// Module ID: 9359
// Function ID: 9360
// Name: openEmojiPickerActionSheet
// Dependencies: [1392, 9360, 5054, 9361, 1999, 2]
// Exports: openEmojiPickerActionSheet

// Module 9359 (openEmojiPickerActionSheet)
import EmojiConstants from "EmojiConstants" /* 1392 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9360 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = size.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const obj = emojis_EmojiActionCreators;
  const result = obj.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9361, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
