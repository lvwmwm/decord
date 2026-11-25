// Module ID: 12107
// Function ID: 12108
// Name: showEmojiActionSheet
// Dependencies: [5127, 11324, 2119, 2]
// Exports: default

// Module 12107 (showEmojiActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/emoji/showEmojiActionSheet.tsx");

export default function showEmojiActionSheet(emojiNode) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { emojiNode };
  obj.openLazy(asyncRequire(11324, dependencyMap.paths), "MessageEmojiActionSheet", obj2);
};
