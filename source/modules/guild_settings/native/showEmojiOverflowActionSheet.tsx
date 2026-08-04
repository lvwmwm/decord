// Module ID: 16521
// Function ID: 16522
// Name: showEmojiOverflowActionSheet
// Dependencies: [4253, 16522, 1959, 2]
// Exports: default

// Module 16521 (showEmojiOverflowActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = importDefault(4253);
  obj = {
    onClose() {
      return callback(table[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(require(1959) /* asyncRequireImpl */(16522, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
