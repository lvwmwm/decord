// Module ID: 9319
// Function ID: 72816
// Name: EMOJI_PICKER_ACTION_SHEET_KEY
// Dependencies: []
// Exports: openEmojiPickerActionSheet

// Module 9319 (EMOJI_PICKER_ACTION_SHEET_KEY)
const EmojiInteractionPoint = require(dependencyMap[0]).EmojiInteractionPoint;
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = require(dependencyMap[1]).initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = require(dependencyMap[1]);
  importDefault(dependencyMap[2]).openLazy(require(dependencyMap[4])(dependencyMap[3], dependencyMap.paths), "EmojiPickerActionSheet", arg0, stack);
};
