// Module ID: 9063
// Function ID: 9064
// Name: openEmojiPickerActionSheet
// Dependencies: [1389, 9064, 5127, 9065, 2119, 2]
// Exports: openEmojiPickerActionSheet

// Module 9063 (openEmojiPickerActionSheet)
import EmojiConstants from "EmojiConstants" /* 1389 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9064 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = size.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export function openEmojiPickerActionSheet(arg0, stack) {
  const obj = emojis_EmojiActionCreators;
  const result = obj.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9065, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
}
