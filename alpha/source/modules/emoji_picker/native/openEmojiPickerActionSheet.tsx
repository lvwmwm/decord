// Module ID: 9555
// Function ID: 9556
// Name: openEmojiPickerActionSheet
// Dependencies: [1391, 9556, 5546, 9557, 2121, 2]
// Exports: openEmojiPickerActionSheet

// Module 9555 (openEmojiPickerActionSheet)
import EmojiConstants from "EmojiConstants" /* 1391 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9556 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = size.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export function openEmojiPickerActionSheet(arg0, stack) {
  const obj = emojis_EmojiActionCreators;
  const result = obj.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9557, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
}
