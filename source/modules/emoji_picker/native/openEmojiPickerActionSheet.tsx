// Module ID: 11053
// Function ID: 11054
// Name: EMOJI_PICKER_ACTION_SHEET_KEY
// Dependencies: [1924, 10262, 4448, 11054, 2008, 2]
// Exports: openEmojiPickerActionSheet

// Module 11053 (EMOJI_PICKER_ACTION_SHEET_KEY)
import set from "set" /* 2 */;
import set2 from "set" /* 1924 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;
import toggleGuildExpandedState from "toggleGuildExpandedState" /* 10262 */;

const EmojiInteractionPoint = set2.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = set.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = toggleGuildExpandedState.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = toggleGuildExpandedState;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11054, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
