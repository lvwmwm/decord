// Module ID: 9999
// Function ID: 10000
// Name: StickersSearchUtils
// Dependencies: [6188, 7270, 2]
// Exports: searchAllStickers, searchSendableStickers, searchUnsendableStickers

// Module 9999 (StickersSearchUtils)
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 6188 */;
import StickerSendability from "StickerSendability" /* 7270 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/stickers/StickersSearchUtils.tsx");

export const searchAllStickers = function searchAllStickers(arg0) {
  const items = [arg0];
  const obj = AutocompleteUtilsDefault;
  const queryStickersResult = obj.queryStickers(items, true);
  return queryStickersResult.map((sticker) => sticker.sticker);
};
export const searchSendableStickers = function searchSendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 === StickerSendability.StickerSendability.SENDABLE];
  const obj = AutocompleteUtilsDefault;
  const queryStickersResult = obj.queryStickers(items, true, items1);
  return queryStickersResult.map((sticker) => sticker.sticker);
};
export const searchUnsendableStickers = function searchUnsendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 !== StickerSendability.StickerSendability.SENDABLE];
  const obj = AutocompleteUtilsDefault;
  const queryStickersResult = obj.queryStickers(items, true, items1);
  return queryStickersResult.map((sticker) => sticker.sticker);
};
