// Module ID: 9655
// Function ID: 75120
// Name: hideStickerDetailActionSheet
// Dependencies: [4098, 9656, 1934, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 9655 (hideStickerDetailActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  importDefault(4098).hideActionSheet("sticker_detail_action_sheet");
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(9656, dependencyMap.paths), "sticker_detail_action_sheet", arg0);
};
