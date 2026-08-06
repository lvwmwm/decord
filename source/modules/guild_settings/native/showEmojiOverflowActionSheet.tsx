// Module ID: 16541
// Function ID: 16542
// Name: showEmojiOverflowActionSheet
// Dependencies: [4253, 16542, 1988, 2]
// Exports: default

// Module 16541 (showEmojiOverflowActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = importDefault(4253);
  obj = {
    onClose() {
      return callback(table[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(require(1988) /* asyncRequireImpl */(16542, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
