// Module ID: 16130
// Function ID: 124371
// Name: showEmojiOverflowActionSheet
// Dependencies: [0, 0, 0, 0]
// Exports: default

// Module 16130 (showEmojiOverflowActionSheet)
import result from "result";

result = result.fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

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
