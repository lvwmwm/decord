// Module ID: 10018
// Function ID: 10019
// Name: searchAllStickers
// Dependencies: [5221, 6016, 2]
// Exports: searchAllStickers, searchSendableStickers, searchUnsendableStickers

// Module 10018 (searchAllStickers)
const result = require("set").fileFinishedImporting("modules/stickers/StickersSearchUtils.tsx");

export const searchAllStickers = function searchAllStickers(arg0) {
  const items = [arg0];
  const obj = importDefault(5221);
  return importDefault(5221).queryStickers(items, true).map((sticker) => sticker.sticker);
};
export const searchSendableStickers = function searchSendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 === callback(table[1]).StickerSendability.SENDABLE];
  const obj = importDefault(5221);
  return importDefault(5221).queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};
export const searchUnsendableStickers = function searchUnsendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 !== callback(table[1]).StickerSendability.SENDABLE];
  const obj = importDefault(5221);
  return importDefault(5221).queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};
