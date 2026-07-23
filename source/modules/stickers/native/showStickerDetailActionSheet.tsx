// Module ID: 9619
// Function ID: 74909
// Name: hideStickerDetailActionSheet
// Dependencies: [4098, 9620, 1934, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 9619 (hideStickerDetailActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  importDefault(4098).hideActionSheet("sticker_detail_action_sheet");
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(9620, dependencyMap.paths), "sticker_detail_action_sheet", arg0);
};
