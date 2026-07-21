// Module ID: 9611
// Function ID: 74855
// Name: hideStickerDetailActionSheet
// Dependencies: []
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 9611 (hideStickerDetailActionSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  importDefault(dependencyMap[0]).hideActionSheet("sticker_detail_action_sheet");
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  importDefault(dependencyMap[0]).openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "sticker_detail_action_sheet", arg0);
};
