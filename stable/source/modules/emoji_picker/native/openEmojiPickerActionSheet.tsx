// Module ID: 9939
// Function ID: 9940
// Name: openEmojiPickerActionSheet
// Dependencies: [1386, 9940, 5258, 9941, 1994, 2]
// Exports: openEmojiPickerActionSheet

// Module 9939 (openEmojiPickerActionSheet)
import EmojiConstants from "EmojiConstants" /* 1386 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9940 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = size.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export function openEmojiPickerActionSheet(arg0, stack) {
  const obj = emojis_EmojiActionCreators;
  const result = obj.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9941, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
}
