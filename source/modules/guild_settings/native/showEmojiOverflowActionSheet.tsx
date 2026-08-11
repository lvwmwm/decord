// Module ID: 16664
// Function ID: 16665
// Name: showEmojiOverflowActionSheet
// Dependencies: [4271, 16665, 2007, 2]
// Exports: default

// Module 16664 (showEmojiOverflowActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = importDefault(4271);
  obj = {
    onClose() {
      return callback(table[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(require(2007) /* asyncRequireImpl */(16665, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
