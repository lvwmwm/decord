// Module ID: 9537
// Function ID: 9538
// Name: openEmojiPickerActionSheet
// Dependencies: [1390, 9538, 5257, 9539, 2120, 2]
// Exports: openEmojiPickerActionSheet

// Module 9537 (openEmojiPickerActionSheet)
import EmojiConstants from "EmojiConstants" /* 1390 */;
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9538 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = size.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export function openEmojiPickerActionSheet(arg0, stack) {
  const obj = emojis_EmojiActionCreators;
  const result = obj.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9539, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
}
