// Module ID: 12040
// Function ID: 12041
// Name: showEmojiActionSheet
// Dependencies: [5006, 11257, 2121, 2]
// Exports: default

// Module 12040 (showEmojiActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/emoji/showEmojiActionSheet.tsx");

export default function showEmojiActionSheet(emojiNode) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { emojiNode };
  obj.openLazy(asyncRequire(11257, dependencyMap.paths), "MessageEmojiActionSheet", obj2);
};
