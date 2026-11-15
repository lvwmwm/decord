// Module ID: 11853
// Function ID: 11854
// Name: showEmojiActionSheet
// Dependencies: [5406, 10204, 2118, 2]
// Exports: default

// Module 11853 (showEmojiActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/emoji/showEmojiActionSheet.tsx");

export default function showEmojiActionSheet(emojiNode) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { emojiNode };
  obj.openLazy(asyncRequire(10204, dependencyMap.paths), "MessageEmojiActionSheet", obj2);
};
