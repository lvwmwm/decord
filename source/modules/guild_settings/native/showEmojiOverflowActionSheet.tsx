// Module ID: 16911
// Function ID: 16912
// Name: showEmojiOverflowActionSheet
// Dependencies: [4347, 16912, 2009, 2]
// Exports: default

// Module 16911 (showEmojiOverflowActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;

const result = set.fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    onClose() {
      return callback(table[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(asyncRequireImpl(16912, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
