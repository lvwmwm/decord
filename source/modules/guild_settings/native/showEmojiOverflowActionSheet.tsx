// Module ID: 16501
// Function ID: 16502
// Name: showEmojiOverflowActionSheet
// Dependencies: [4223, 16502, 1959, 2]
// Exports: default

// Module 16501 (showEmojiOverflowActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = importDefault(4223);
  obj = {
    onClose() {
      return callback(table[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(require(1959) /* asyncRequireImpl */(16502, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
