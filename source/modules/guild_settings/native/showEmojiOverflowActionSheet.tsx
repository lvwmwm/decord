// Module ID: 16313
// Function ID: 127078
// Name: showEmojiOverflowActionSheet
// Dependencies: [4099, 16314, 1935, 2]
// Exports: default

// Module 16313 (showEmojiOverflowActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = importDefault(4099);
  obj = {
    onClose() {
      return outer1_1(outer1_2[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(require(1935) /* maybeLoadBundle */(16314, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
