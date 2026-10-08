// Module ID: 9729
// Function ID: 9730
// Name: showStickerDetailActionSheet
// Dependencies: [5054, 9730, 1999, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 9729 (showStickerDetailActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9730, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};
