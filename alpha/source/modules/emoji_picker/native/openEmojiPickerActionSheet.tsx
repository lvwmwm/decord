// Module ID: 9436
// Function ID: 9437
// Name: openEmojiPickerActionSheet
// Dependencies: [1393, 9437, 5060, 9438, 2000, 2]
// Exports: openEmojiPickerActionSheet

// Module 9436 (openEmojiPickerActionSheet)
import EmojiConstants from "EmojiConstants" /* 1393 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9437 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = size.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const obj = emojis_EmojiActionCreators;
  const result = obj.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9438, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
