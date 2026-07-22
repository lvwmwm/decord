// Module ID: 16138
// Function ID: 124413
// Name: showEmojiOverflowActionSheet
// Dependencies: [0, 0, 0, 0]
// Exports: default

// Module 16138 (showEmojiOverflowActionSheet)
const result = require("__exportStarResult1").fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = importDefault(dependencyMap[0]);
  obj = {
    onClose() {
      return callback(closure_2[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
