// Module ID: 10322
// Function ID: 10323
// Name: searchAllStickers
// Dependencies: [5402, 7275, 2]
// Exports: searchAllStickers, searchSendableStickers, searchUnsendableStickers

// Module 10322 (searchAllStickers)
import set from "set" /* 2 */;
import NOOPDefault from "NOOP" /* 5402 */;

const result = set.fileFinishedImporting("modules/stickers/StickersSearchUtils.tsx");

export const searchAllStickers = function searchAllStickers(arg0) {
  const items = [arg0];
  const obj = NOOPDefault;
  return NOOPDefault.queryStickers(items, true).map((sticker) => sticker.sticker);
};
export const searchSendableStickers = function searchSendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 === callback(table[1]).StickerSendability.SENDABLE];
  const obj = NOOPDefault;
  return NOOPDefault.queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};
export const searchUnsendableStickers = function searchUnsendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 !== callback(table[1]).StickerSendability.SENDABLE];
  const obj = NOOPDefault;
  return NOOPDefault.queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};
