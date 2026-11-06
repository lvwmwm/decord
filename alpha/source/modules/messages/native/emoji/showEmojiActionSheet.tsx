// Module ID: 11831
// Function ID: 11832
// Name: showEmojiActionSheet
// Dependencies: [5404, 10189, 2118, 2]
// Exports: default

// Module 11831 (showEmojiActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/emoji/showEmojiActionSheet.tsx");

export default function showEmojiActionSheet(emojiNode) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { emojiNode };
  obj.openLazy(asyncRequire(10189, dependencyMap.paths), "MessageEmojiActionSheet", obj2);
};
