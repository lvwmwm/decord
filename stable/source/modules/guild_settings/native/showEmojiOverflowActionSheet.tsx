// Module ID: 17680
// Function ID: 17681
// Name: showEmojiOverflowActionSheet
// Dependencies: [4603, 17681, 1896, 2]
// Exports: default

// Module 17680 (showEmojiOverflowActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = {
    onClose() {
      return ActionSheetActionCreatorsDefault.hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(asyncRequireImpl(17681, dependencyMap.paths), "EmojiOverflowActionSheet", obj2);
};
