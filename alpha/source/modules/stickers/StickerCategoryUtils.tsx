// Module ID: 9713
// Function ID: 9714
// Name: StickerCategoryUtils
// Dependencies: [7037, 5746, 2]
// Exports: getStickerCategoriesWithNitroLockState, isStickerCategoryNitroLocked

// Module 9713 (StickerCategoryUtils)
import StickersTypes from "StickersTypes" /* 5746 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/stickers/StickerCategoryUtils.tsx");

export const isStickerCategoryNitroLocked = function isStickerCategoryNitroLocked(type, stateFromStores, arg2) {
  let closure_1;
  _require = stateFromStores;
  dependencyMap = arg2;
  let everyResult = type.type === require("StickersTypes").StickerCategoryTypes.GUILD && 0 !== type.stickers.length;
  if (everyResult) {
    const stickers = type.stickers;
    everyResult = stickers.every((item) => {
      const obj = closure_2_0(closure_2_1[0]);
      const stickerSendability = obj.getStickerSendability(item, closure_0, closure_1);
      return stickerSendability === closure_2_0(closure_2_1[0]).StickerSendability.SENDABLE_WITH_PREMIUM;
    });
  }
  return everyResult;
};
export const getStickerCategoriesWithNitroLockState = function getStickerCategoriesWithNitroLockState(arr, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  return arr.flatMap((type) => {
    const f101621 = (item) => {
      const obj = closure_2_0(closure_2_1[0]);
      const stickerSendability = obj.getStickerSendability(item, closure_0, closure_1);
      return stickerSendability !== closure_2_0(closure_2_1[0]).StickerSendability.SENDABLE_WITH_BOOSTED_GUILD;
    };
    type = type.type;
    if (StickersTypes.StickerCategoryTypes.FAVORITE !== type) {
      let obj;
      let items1;
      if (StickersTypes.StickerCategoryTypes.RECENT !== type) {
        if (StickersTypes.StickerCategoryTypes.GUILD === type) {
          closure_0 = tmp;
          closure_1 = tmp2;
          const stickers1 = type.stickers;
          const found = stickers1.filter(f101621);
          if (found.length > 0) {
            let obj4;
            const obj2 = { stickers: found };
            const merged = Object.assign(type);
            closure_0 = tmp;
            closure_1 = tmp2;
            let everyResult = obj2.type === tmp3(5746).StickerCategoryTypes.GUILD && 0 !== obj2.stickers.length;
            if (everyResult) {
              const stickers = obj2.stickers;
              everyResult = stickers.every((item) => {
                const obj = closure_2_0(closure_2_1[0]);
                const stickerSendability = obj.getStickerSendability(item, closure_0, closure_1);
                return stickerSendability === closure_2_0(closure_2_1[0]).StickerSendability.SENDABLE_WITH_PREMIUM;
              });
            }
            if (everyResult) {
              const obj3 = { stickers: found, isNitroLocked: true };
              const merged1 = Object.assign(type);
              obj4 = obj3;
            }
            obj = obj4;
          }
          obj4 = { isNitroLocked: false };
          const merged2 = Object.assign(type);
        } else {
          obj = { isNitroLocked: false };
          const merged3 = Object.assign(type);
        }
      }
      if (null != obj) {
        const items = [obj];
        items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    }
    closure_0 = tmp;
    closure_1 = tmp2;
    const stickers2 = type.stickers;
    const found1 = stickers2.filter(f101621);
    let tmp18 = null;
    if (0 !== found1.length) {
      const obj5 = { stickers: found1, isNitroLocked: false };
      const merged4 = Object.assign(type);
      tmp18 = obj5;
    }
    obj = tmp18;
  });
};
