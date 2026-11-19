// Module ID: 11313
// Function ID: 11314
// Name: StickersSearchUtils
// Dependencies: [6435, 6708, 2]
// Exports: searchAllStickers, searchSendableStickers, searchUnsendableStickers

// Module 11313 (StickersSearchUtils)
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 6435 */;
import StickerSendability from "StickerSendability" /* 6708 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/stickers/StickersSearchUtils.tsx");

export function searchAllStickers(arg0) {
  const items = [arg0];
  const obj = AutocompleteUtilsDefault;
  const queryStickersResult = obj.queryStickers(items, true);
  return queryStickersResult.map((sticker) => sticker.sticker);
}
export function searchSendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 === StickerSendability.StickerSendability.SENDABLE];
  const obj = AutocompleteUtilsDefault;
  const queryStickersResult = obj.queryStickers(items, true, items1);
  return queryStickersResult.map((sticker) => sticker.sticker);
}
export function searchUnsendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 !== StickerSendability.StickerSendability.SENDABLE];
  const obj = AutocompleteUtilsDefault;
  const queryStickersResult = obj.queryStickers(items, true, items1);
  return queryStickersResult.map((sticker) => sticker.sticker);
}
