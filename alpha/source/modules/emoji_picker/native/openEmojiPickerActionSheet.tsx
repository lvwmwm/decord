// Module ID: 9891
// Function ID: 9892
// Name: openEmojiPickerActionSheet
// Dependencies: [1392, 9892, 5247, 9893, 2000, 2]
// Exports: openEmojiPickerActionSheet

// Module 9891 (openEmojiPickerActionSheet)
import EmojiConstants from "EmojiConstants" /* 1392 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9892 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = size.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export function openEmojiPickerActionSheet(arg0, stack) {
  const obj = emojis_EmojiActionCreators;
  const result = obj.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9893, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
}
