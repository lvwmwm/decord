// Module ID: 12063
// Function ID: 12064
// Name: showStickerDetailActionSheet
// Dependencies: [5546, 12064, 2121, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 12063 (showStickerDetailActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export function hideStickerDetailActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(sticker_detail_action_sheet);
}
export function showStickerDetailActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12064, dependencyMap.paths), sticker_detail_action_sheet, arg0);
}
