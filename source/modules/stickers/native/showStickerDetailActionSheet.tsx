// Module ID: 9906
// Function ID: 9907
// Name: hideStickerDetailActionSheet
// Dependencies: [4270, 9907, 1988, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 9906 (hideStickerDetailActionSheet)
const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  importDefault(4270).hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  importDefault(4270).openLazy(require(1988) /* asyncRequireImpl */(9907, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};
