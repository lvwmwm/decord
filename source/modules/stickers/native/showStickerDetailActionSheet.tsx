// Module ID: 9577
// Function ID: 74710
// Name: hideStickerDetailActionSheet
// Dependencies: [4099, 9578, 1935, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 9577 (hideStickerDetailActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  importDefault(4099).hideActionSheet("sticker_detail_action_sheet");
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(9578, dependencyMap.paths), "sticker_detail_action_sheet", arg0);
};
