// Module ID: 10436
// Function ID: 10437
// Name: openEmojiPickerActionSheet
// Dependencies: [1379, 10437, 4725, 10438, 1984, 2]
// Exports: openEmojiPickerActionSheet

// Module 10436 (openEmojiPickerActionSheet)
import EmojiConstants from "EmojiConstants" /* 1379 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 10437 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = size.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = emojis_EmojiActionCreators.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10438, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
