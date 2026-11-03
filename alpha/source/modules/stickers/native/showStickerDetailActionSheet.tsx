// Module ID: 10416
// Function ID: 10417
// Name: showStickerDetailActionSheet
// Dependencies: [5381, 10417, 2123, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 10416 (showStickerDetailActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export function hideStickerDetailActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(sticker_detail_action_sheet);
}
export function showStickerDetailActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10417, dependencyMap.paths), sticker_detail_action_sheet, arg0);
}
