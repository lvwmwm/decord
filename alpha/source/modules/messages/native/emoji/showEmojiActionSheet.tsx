// Module ID: 11865
// Function ID: 11866
// Name: showEmojiActionSheet
// Dependencies: [5384, 10237, 2123, 2]
// Exports: default

// Module 11865 (showEmojiActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/emoji/showEmojiActionSheet.tsx");

export default function showEmojiActionSheet(emojiNode) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { emojiNode };
  obj.openLazy(asyncRequire(10237, dependencyMap.paths), "MessageEmojiActionSheet", obj2);
};
