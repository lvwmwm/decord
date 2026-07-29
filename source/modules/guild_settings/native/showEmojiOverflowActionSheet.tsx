// Module ID: 16399
// Function ID: 16400
// Name: showEmojiOverflowActionSheet
// Dependencies: [4157, 16400, 1959, 2]
// Exports: default

// Module 16399 (showEmojiOverflowActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = importDefault(4157);
  obj = {
    onClose() {
      return callback(table[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(require(1959) /* asyncRequireImpl */(16400, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
