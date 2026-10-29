// Module ID: 10241
// Function ID: 10242
// Name: showStickerDetailActionSheet
// Dependencies: [5247, 10242, 2000, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 10241 (showStickerDetailActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export function hideStickerDetailActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(sticker_detail_action_sheet);
}
export function showStickerDetailActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10242, dependencyMap.paths), sticker_detail_action_sheet, arg0);
}
