// Module ID: 9880
// Function ID: 9881
// Name: searchAllStickers
// Dependencies: [5141, 5873, 2]
// Exports: searchAllStickers, searchSendableStickers, searchUnsendableStickers

// Module 9880 (searchAllStickers)
const result = require("set").fileFinishedImporting("modules/stickers/StickersSearchUtils.tsx");

export const searchAllStickers = function searchAllStickers(arg0) {
  const items = [arg0];
  const obj = importDefault(5141);
  return importDefault(5141).queryStickers(items, true).map((sticker) => sticker.sticker);
};
export const searchSendableStickers = function searchSendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 === callback(table[1]).StickerSendability.SENDABLE];
  const obj = importDefault(5141);
  return importDefault(5141).queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};
export const searchUnsendableStickers = function searchUnsendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 !== callback(table[1]).StickerSendability.SENDABLE];
  const obj = importDefault(5141);
  return importDefault(5141).queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};
