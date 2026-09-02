// Module ID: 17385
// Function ID: 17386
// Name: showEmojiOverflowActionSheet
// Dependencies: [4445, 17386, 2008, 2]
// Exports: default

// Module 17385 (showEmojiOverflowActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    onClose() {
      return callback(table[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(asyncRequireImpl(17386, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
