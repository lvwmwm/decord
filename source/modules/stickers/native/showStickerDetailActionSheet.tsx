// Module ID: 9612
// Function ID: 74868
// Name: hideStickerDetailActionSheet
// Dependencies: []
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 9612 (hideStickerDetailActionSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  importDefault(dependencyMap[0]).hideActionSheet("sticker_detail_action_sheet");
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  importDefault(dependencyMap[0]).openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "sticker_detail_action_sheet", arg0);
};
