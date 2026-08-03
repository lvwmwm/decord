// Module ID: 16488
// Function ID: 16489
// Name: showEmojiOverflowActionSheet
// Dependencies: [4223, 16489, 1959, 2]
// Exports: default

// Module 16488 (showEmojiOverflowActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = importDefault(4223);
  obj = {
    onClose() {
      return callback(table[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(require(1959) /* asyncRequireImpl */(16489, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
