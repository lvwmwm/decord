// Module ID: 16566
// Function ID: 16567
// Name: showEmojiOverflowActionSheet
// Dependencies: [4270, 16567, 1988, 2]
// Exports: default

// Module 16566 (showEmojiOverflowActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = importDefault(4270);
  obj = {
    onClose() {
      return callback(table[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(require(1988) /* asyncRequireImpl */(16567, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
