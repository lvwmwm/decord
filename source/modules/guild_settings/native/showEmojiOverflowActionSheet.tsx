// Module ID: 16364
// Function ID: 127281
// Name: showEmojiOverflowActionSheet
// Dependencies: [4133, 16365, 1935, 2]
// Exports: default

// Module 16364 (showEmojiOverflowActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = importDefault(4133);
  obj = {
    onClose() {
      return outer1_1(outer1_2[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(require(1935) /* maybeLoadBundle */(16365, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
