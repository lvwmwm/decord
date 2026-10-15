// Module ID: 18641
// Function ID: 18642
// Name: showEmojiOverflowActionSheet
// Dependencies: [5115, 18642, 2000, 2]
// Exports: default

// Module 18641 (showEmojiOverflowActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
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
  const tmp2 = asyncRequire(18642, dependencyMap.paths);
  const merged = Object.assign(arg0);
  openLazy(tmp2, "EmojiOverflowActionSheet", obj);
};
