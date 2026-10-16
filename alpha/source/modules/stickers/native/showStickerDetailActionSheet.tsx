// Module ID: 10012
// Function ID: 10013
// Name: showStickerDetailActionSheet
// Dependencies: [5118, 10013, 2002, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 10012 (showStickerDetailActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10013, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};
