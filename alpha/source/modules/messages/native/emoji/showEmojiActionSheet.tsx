// Module ID: 12149
// Function ID: 12150
// Name: showEmojiActionSheet
// Dependencies: [5257, 9756, 2120, 2]
// Exports: default

// Module 12149 (showEmojiActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/emoji/showEmojiActionSheet.tsx");

export default function showEmojiActionSheet(emojiNode) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { emojiNode };
  obj.openLazy(asyncRequire(9756, dependencyMap.paths), "MessageEmojiActionSheet", obj2);
};
