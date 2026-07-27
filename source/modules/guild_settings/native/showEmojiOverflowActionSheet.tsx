// Module ID: 16325
// Function ID: 127125
// Name: showEmojiOverflowActionSheet
// Dependencies: [4099, 16326, 1935, 2]
// Exports: default

// Module 16325 (showEmojiOverflowActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = importDefault(4099);
  obj = {
    onClose() {
      return outer1_1(outer1_2[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(require(1935) /* maybeLoadBundle */(16326, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
