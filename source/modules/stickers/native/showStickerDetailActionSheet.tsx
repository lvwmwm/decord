// Module ID: 9617
// Function ID: 74840
// Name: hideStickerDetailActionSheet
// Dependencies: [4133, 9618, 1935, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 9617 (hideStickerDetailActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  importDefault(4133).hideActionSheet("sticker_detail_action_sheet");
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  importDefault(4133).openLazy(require(1935) /* maybeLoadBundle */(9618, dependencyMap.paths), "sticker_detail_action_sheet", arg0);
};
