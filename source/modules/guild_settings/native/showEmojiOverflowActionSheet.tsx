// Module ID: 16733
// Function ID: 16734
// Name: showEmojiOverflowActionSheet
// Dependencies: [4310, 16734, 2007, 2]
// Exports: default

// Module 16733 (showEmojiOverflowActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = importDefault(4310);
  obj = {
    onClose() {
      return callback(table[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(require(2007) /* asyncRequireImpl */(16734, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
