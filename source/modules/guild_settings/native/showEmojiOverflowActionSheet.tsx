// Module ID: 16643
// Function ID: 16644
// Name: showEmojiOverflowActionSheet
// Dependencies: [4271, 16644, 1988, 2]
// Exports: default

// Module 16643 (showEmojiOverflowActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = importDefault(4271);
  obj = {
    onClose() {
      return callback(table[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(require(1988) /* asyncRequireImpl */(16644, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
