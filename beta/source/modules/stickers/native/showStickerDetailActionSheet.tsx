// Module ID: 10734
// Function ID: 10735
// Name: showStickerDetailActionSheet
// Dependencies: [4757, 10735, 1984, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 10734 (showStickerDetailActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10735, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};
