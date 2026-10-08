// Module ID: 18070
// Function ID: 18071
// Name: showEmojiOverflowActionSheet
// Dependencies: [5054, 18071, 1999, 2]
// Exports: default

// Module 18070 (showEmojiOverflowActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  let obj = {
    onClose() {
      const obj = ActionSheetActionCreatorsDefault;
      return obj.hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(18071, dependencyMap.paths);
  const merged = Object.assign(arg0);
  openLazy(tmp2, "EmojiOverflowActionSheet", obj);
};
