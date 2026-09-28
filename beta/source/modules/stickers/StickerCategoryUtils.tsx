// Module ID: 9852
// Function ID: 9853
// Name: StickerCategoryUtils
// Dependencies: [5581, 6755, 2]
// Exports: isStickerCategoryNitroLocked

// Module 9852 (StickerCategoryUtils)
import StickerSendability from "StickerSendability" /* 6755 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/stickers/StickerCategoryUtils.tsx");

export const isStickerCategoryNitroLocked = function isStickerCategoryNitroLocked(type, arg1, arg2) {
  _require = arg1;
  dependencyMap = arg2;
  let everyResult = type.type === require("StickersTypes").StickerCategoryTypes.GUILD;
  if (everyResult) {
    everyResult = 0 !== type.stickers.length;
  }
  if (everyResult) {
    const stickers = type.stickers;
    everyResult = stickers.every((item) => {
      const stickerSendability = StickerSendability.getStickerSendability(item, closure_0, closure_1);
      return stickerSendability === StickerSendability.StickerSendability.SENDABLE_WITH_PREMIUM;
    });
  }
  return everyResult;
};
