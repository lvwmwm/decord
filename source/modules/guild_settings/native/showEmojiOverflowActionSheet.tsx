// Module ID: 16724
// Function ID: 16725
// Name: showEmojiOverflowActionSheet
// Dependencies: [4310, 16725, 2007, 2]
// Exports: default

// Module 16724 (showEmojiOverflowActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = importDefault(4310);
  obj = {
    onClose() {
      return callback(table[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(require(2007) /* asyncRequireImpl */(16725, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
