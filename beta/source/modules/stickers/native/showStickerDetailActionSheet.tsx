// Module ID: 10698
// Function ID: 10699
// Name: showStickerDetailActionSheet
// Dependencies: [4725, 10699, 1984, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 10698 (showStickerDetailActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10699, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};
