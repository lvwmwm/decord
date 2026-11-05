// Module ID: 10126
// Function ID: 10127
// Name: openEmojiPickerActionSheet
// Dependencies: [1388, 10127, 5384, 10128, 2123, 2]
// Exports: openEmojiPickerActionSheet

// Module 10126 (openEmojiPickerActionSheet)
import EmojiConstants from "EmojiConstants" /* 1388 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 10127 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = size.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export function openEmojiPickerActionSheet(arg0, stack) {
  const obj = emojis_EmojiActionCreators;
  const result = obj.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(10128, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
}
