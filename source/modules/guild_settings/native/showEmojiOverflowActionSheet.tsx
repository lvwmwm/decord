// Module ID: 16255
// Function ID: 126586
// Name: showEmojiOverflowActionSheet
// Dependencies: [4098, 16256, 1934, 2]
// Exports: default

// Module 16255 (showEmojiOverflowActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = importDefault(4098);
  obj = {
    onClose() {
      return outer1_1(outer1_2[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(require(1934) /* maybeLoadBundle */(16256, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
