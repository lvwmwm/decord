// Module ID: 16786
// Function ID: 16787
// Name: showEmojiOverflowActionSheet
// Dependencies: [4342, 16787, 2007, 2]
// Exports: default

// Module 16786 (showEmojiOverflowActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = importDefault(4342);
  obj = {
    onClose() {
      return callback(table[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(require(2007) /* asyncRequireImpl */(16787, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
