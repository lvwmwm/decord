// Module ID: 10233
// Function ID: 10234
// Name: hideStickerDetailActionSheet
// Dependencies: [4342, 10234, 2007, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 10233 (hideStickerDetailActionSheet)
const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  importDefault(4342).hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  importDefault(4342).openLazy(require(2007) /* asyncRequireImpl */(10234, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};
