// Module ID: 8784
// Function ID: 8785
// Name: EMOJI_PICKER_ACTION_SHEET_KEY
// Dependencies: [1925, 8785, 4347, 8786, 2009, 2]
// Exports: openEmojiPickerActionSheet

// Module 8784 (EMOJI_PICKER_ACTION_SHEET_KEY)
import set from "set" /* 2 */;
import set2 from "set" /* 1925 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;
import toggleGuildExpandedState from "toggleGuildExpandedState" /* 8785 */;

const EmojiInteractionPoint = set2.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = set.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = toggleGuildExpandedState.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = toggleGuildExpandedState;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(8786, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
