// Module ID: 10737
// Function ID: 10738
// Name: StickerCategoryUtils
// Dependencies: [5573, 7667, 2]
// Exports: isStickerCategoryNitroLocked

// Module 10737 (StickerCategoryUtils)
import StickerSendability from "StickerSendability" /* 7667 */;
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
