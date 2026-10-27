// Module ID: 9726
// Function ID: 9727
// Name: openEmojiPickerActionSheet
// Dependencies: [1395, 9727, 5155, 9728, 2002, 2]
// Exports: openEmojiPickerActionSheet

// Module 9726 (openEmojiPickerActionSheet)
import EmojiConstants from "EmojiConstants" /* 1395 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9727 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = size.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const obj = emojis_EmojiActionCreators;
  const result = obj.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(9728, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
