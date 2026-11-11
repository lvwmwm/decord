// Module ID: 9477
// Function ID: 9478
// Name: openEmojiPickerActionSheet
// Dependencies: [1388, 9478, 5489, 9479, 2118, 2]
// Exports: openEmojiPickerActionSheet

// Module 9477 (openEmojiPickerActionSheet)
import EmojiConstants from "EmojiConstants" /* 1388 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9478 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = size.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export function openEmojiPickerActionSheet(arg0, stack) {
  const obj = emojis_EmojiActionCreators;
  const result = obj.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9479, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
}
