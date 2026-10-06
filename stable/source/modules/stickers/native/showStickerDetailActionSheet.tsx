// Module ID: 9902
// Function ID: 9903
// Name: showStickerDetailActionSheet
// Dependencies: [4801, 9903, 1987, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 9902 (showStickerDetailActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9903, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};
