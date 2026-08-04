// Module ID: 16520
// Function ID: 16521
// Name: showEmojiOverflowActionSheet
// Dependencies: [4253, 16521, 1959, 2]
// Exports: default

// Module 16520 (showEmojiOverflowActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = importDefault(4253);
  obj = {
    onClose() {
      return callback(table[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(require(1959) /* asyncRequireImpl */(16521, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
