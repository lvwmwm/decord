// Module ID: 9918
// Function ID: 9919
// Name: openEmojiPickerActionSheet
// Dependencies: [1387, 9919, 5253, 9920, 1995, 2]
// Exports: openEmojiPickerActionSheet

// Module 9918 (openEmojiPickerActionSheet)
import EmojiConstants from "EmojiConstants" /* 1387 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9919 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = size.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export function openEmojiPickerActionSheet(arg0, stack) {
  const obj = emojis_EmojiActionCreators;
  const result = obj.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9920, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
}
