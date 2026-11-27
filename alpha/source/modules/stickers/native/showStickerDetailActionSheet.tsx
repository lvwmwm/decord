// Module ID: 10849
// Function ID: 10850
// Name: showStickerDetailActionSheet
// Dependencies: [5257, 10850, 2120, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 10849 (showStickerDetailActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export function hideStickerDetailActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(sticker_detail_action_sheet);
}
export function showStickerDetailActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10850, dependencyMap.paths), sticker_detail_action_sheet, arg0);
}
