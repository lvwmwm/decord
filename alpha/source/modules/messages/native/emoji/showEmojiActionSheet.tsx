// Module ID: 12063
// Function ID: 12064
// Name: showEmojiActionSheet
// Dependencies: [5037, 11279, 2121, 2]
// Exports: default

// Module 12063 (showEmojiActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/emoji/showEmojiActionSheet.tsx");

export default function showEmojiActionSheet(emojiNode) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { emojiNode };
  obj.openLazy(asyncRequire(11279, dependencyMap.paths), "MessageEmojiActionSheet", obj2);
};
