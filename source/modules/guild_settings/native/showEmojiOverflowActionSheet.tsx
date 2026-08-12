// Module ID: 16722
// Function ID: 16723
// Name: showEmojiOverflowActionSheet
// Dependencies: [4312, 16723, 2007, 2]
// Exports: default

// Module 16722 (showEmojiOverflowActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = importDefault(4312);
  obj = {
    onClose() {
      return callback(table[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(require(2007) /* asyncRequireImpl */(16723, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
