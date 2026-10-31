// Module ID: 10286
// Function ID: 10287
// Name: showStickerDetailActionSheet
// Dependencies: [5258, 10287, 1994, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 10286 (showStickerDetailActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export function hideStickerDetailActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(sticker_detail_action_sheet);
}
export function showStickerDetailActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10287, dependencyMap.paths), sticker_detail_action_sheet, arg0);
}
