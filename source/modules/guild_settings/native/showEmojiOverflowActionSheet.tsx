// Module ID: 16422
// Function ID: 16423
// Name: showEmojiOverflowActionSheet
// Dependencies: [4161, 16423, 1959, 2]
// Exports: default

// Module 16422 (showEmojiOverflowActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = importDefault(4161);
  obj = {
    onClose() {
      return callback(table[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(require(1959) /* asyncRequireImpl */(16423, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
