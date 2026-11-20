// Module ID: 12576
// Function ID: 12577
// Name: showEmojiActionSheet
// Dependencies: [5542, 11299, 2121, 2]
// Exports: default

// Module 12576 (showEmojiActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/emoji/showEmojiActionSheet.tsx");

export default function showEmojiActionSheet(emojiNode) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { emojiNode };
  obj.openLazy(asyncRequire(11299, dependencyMap.paths), "MessageEmojiActionSheet", obj2);
};
