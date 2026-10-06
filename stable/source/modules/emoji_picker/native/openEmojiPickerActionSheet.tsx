// Module ID: 9640
// Function ID: 9641
// Name: openEmojiPickerActionSheet
// Dependencies: [1381, 9641, 4801, 9642, 1987, 2]
// Exports: openEmojiPickerActionSheet

// Module 9640 (openEmojiPickerActionSheet)
import EmojiConstants from "EmojiConstants" /* 1381 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9641 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = size.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const obj = emojis_EmojiActionCreators;
  const result = obj.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9642, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
