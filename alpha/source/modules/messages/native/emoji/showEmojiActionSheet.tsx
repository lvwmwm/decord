// Module ID: 11982
// Function ID: 11983
// Name: showEmojiActionSheet
// Dependencies: [5008, 11199, 2119, 2]
// Exports: default

// Module 11982 (showEmojiActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/emoji/showEmojiActionSheet.tsx");

export default function showEmojiActionSheet(emojiNode) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { emojiNode };
  obj.openLazy(asyncRequire(11199, dependencyMap.paths), "MessageEmojiActionSheet", obj2);
};
