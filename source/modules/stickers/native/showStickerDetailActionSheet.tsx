// Module ID: 10017
// Function ID: 10018
// Name: hideStickerDetailActionSheet
// Dependencies: [4310, 10018, 2007, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 10017 (hideStickerDetailActionSheet)
const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  importDefault(4310).hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(10018, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};
