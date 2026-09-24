// Module ID: 11474
// Function ID: 11475
// Name: openEmojiPickerActionSheet
// Dependencies: [1375, 10679, 4796, 11475, 1980, 2]
// Exports: openEmojiPickerActionSheet

// Module 11474 (openEmojiPickerActionSheet)
import EmojiConstants from "EmojiConstants" /* 1375 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 10679 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = size.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = emojis_EmojiActionCreators.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11475, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
