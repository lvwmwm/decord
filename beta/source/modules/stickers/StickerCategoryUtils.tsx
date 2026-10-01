// Module ID: 9852
// Function ID: 9853
// Name: StickerCategoryUtils
// Dependencies: [5581, 6755, 2]
// Exports: isStickerCategoryNitroLocked

// Module 9852 (StickerCategoryUtils)
import StickerSendability from "StickerSendability" /* 6755 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/stickers/StickerCategoryUtils.tsx");

export const isStickerCategoryNitroLocked = function isStickerCategoryNitroLocked(type, arg1, arg2) {
  let closure_0;
  let closure_1;
  _require = arg1;
  dependencyMap = arg2;
  let everyResult = type.type === require("StickersTypes").StickerCategoryTypes.GUILD && 0 !== type.stickers.length;
  if (everyResult) {
    const stickers = type.stickers;
    everyResult = stickers.every((item) => {
      const obj = StickerSendability;
      const stickerSendability = obj.getStickerSendability(item, closure_0, closure_1);
      return stickerSendability === StickerSendability.StickerSendability.SENDABLE_WITH_PREMIUM;
    });
  }
  return everyResult;
};
