// Module ID: 11313
// Function ID: 11314
// Name: showStickerDetailActionSheet
// Dependencies: [5489, 11314, 2118, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 11313 (showStickerDetailActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export function hideStickerDetailActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(sticker_detail_action_sheet);
}
export function showStickerDetailActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11314, dependencyMap.paths), sticker_detail_action_sheet, arg0);
}
