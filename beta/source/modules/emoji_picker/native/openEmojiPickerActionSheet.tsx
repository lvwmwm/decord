// Module ID: 9427
// Function ID: 9428
// Name: openEmojiPickerActionSheet
// Dependencies: [1393, 9428, 5056, 9429, 2000, 2]
// Exports: openEmojiPickerActionSheet

// Module 9427 (openEmojiPickerActionSheet)
import EmojiConstants from "EmojiConstants" /* 1393 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9428 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = size.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const obj = emojis_EmojiActionCreators;
  const result = obj.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9429, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
