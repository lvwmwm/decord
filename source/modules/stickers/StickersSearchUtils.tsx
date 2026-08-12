// Module ID: 10009
// Function ID: 10010
// Name: searchAllStickers
// Dependencies: [5199, 5993, 2]
// Exports: searchAllStickers, searchSendableStickers, searchUnsendableStickers

// Module 10009 (searchAllStickers)
const result = require("set").fileFinishedImporting("modules/stickers/StickersSearchUtils.tsx");

export const searchAllStickers = function searchAllStickers(arg0) {
  const items = [arg0];
  const obj = importDefault(5199);
  return importDefault(5199).queryStickers(items, true).map((sticker) => sticker.sticker);
};
export const searchSendableStickers = function searchSendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 === callback(table[1]).StickerSendability.SENDABLE];
  const obj = importDefault(5199);
  return importDefault(5199).queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};
export const searchUnsendableStickers = function searchUnsendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 !== callback(table[1]).StickerSendability.SENDABLE];
  const obj = importDefault(5199);
  return importDefault(5199).queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};
