// Module ID: 10470
// Function ID: 10471
// Name: showStickerDetailActionSheet
// Dependencies: [5384, 10471, 2123, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 10470 (showStickerDetailActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export function hideStickerDetailActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(sticker_detail_action_sheet);
}
export function showStickerDetailActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10471, dependencyMap.paths), sticker_detail_action_sheet, arg0);
}
