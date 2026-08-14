// Module ID: 16740
// Function ID: 16741
// Name: showEmojiOverflowActionSheet
// Dependencies: [4310, 16741, 2007, 2]
// Exports: default

// Module 16740 (showEmojiOverflowActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = importDefault(4310);
  obj = {
    onClose() {
      return callback(table[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(require(2007) /* asyncRequireImpl */(16741, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
