// Module ID: 9397
// Function ID: 9398
// Name: openEmojiPickerActionSheet
// Dependencies: [1393, 9398, 5055, 9399, 2000, 2]
// Exports: openEmojiPickerActionSheet

// Module 9397 (openEmojiPickerActionSheet)
import EmojiConstants from "EmojiConstants" /* 1393 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9398 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = size.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const obj = emojis_EmojiActionCreators;
  const result = obj.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9399, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
