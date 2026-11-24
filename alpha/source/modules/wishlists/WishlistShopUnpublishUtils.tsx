// Module ID: 11022
// Function ID: 11023
// Name: WishlistShopUnpublishUtils
// Dependencies: [1071, 6197, 1112, 2]
// Exports: canRenderWishlistShopUnpublishCountdown, formatWishlistShopUnpublishLabel, getNextFutureShopUnpublishedAt, getShopUnpublishCountdown

// Module 11022 (WishlistShopUnpublishUtils)
import Constants from "Constants" /* 1071 */;
import intl5 from "intl" /* 1112 */;
import CollectiblesUtils from "CollectiblesUtils" /* 6197 */;
import size from "module_2" /* 2 */;

const SKUProductLines = Constants.SKUProductLines;
let c3 = 2592000000;
const result = size.fileFinishedImporting("modules/wishlists/WishlistShopUnpublishUtils.tsx");

export const SHOP_UNPUBLISH_LABEL_THRESHOLD_MS = 2592000000;
export function canRenderWishlistShopUnpublishCountdown(sku) {
  sku = sku.sku;
  let productLine;
  if (sku != null) {
    productLine = sku.productLine;
  }
  return productLine === SKUProductLines.SOCIAL_LAYER_GAME_ITEM || productLine === SKUProductLines.COLLECTIBLES || productLine === SKUProductLines.PREMIUM;
}
export function getNextFutureShopUnpublishedAt(memo1) {
  let timestamp = arg1;
  if (arg1 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  let tmp3;
  const iter = memo1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj = nextResult;
    if (null != nextResult) {
      let time = obj.getTime();
      let tmp8 = time > timestamp;
      if (tmp8) {
        let tmp10 = null == tmp3;
        if (!tmp10) {
          tmp10 = tmp7 < tmp3.getTime();
        }
        tmp8 = tmp10;
      }
      if (tmp8) {
        tmp3 = nextResult;
      }
    }
    continue;
  }
  return tmp3;
}
export function getShopUnpublishCountdown(nextFutureShopUnpublishedAt, timestamp) {
  if (timestamp === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  if (null == nextFutureShopUnpublishedAt) {
    return null;
  } else {
    const diff = nextFutureShopUnpublishedAt.getTime() - timestamp;
    if (diff <= 0) {
      return null;
    } else if (diff > c3) {
      return null;
    } else {
      let obj3;
      const obj = CollectiblesUtils;
      const daysRemaining = obj.getDaysRemaining(nextFutureShopUnpublishedAt, timestamp);
      if (daysRemaining <= 1) {
        const _Math = Math;
        const _Math2 = Math;
        obj3 = { unit: "hours", hours: Math.max(1, Math.floor(diff / 3600000)) };
        const obj2 = { unit: "hours", hours: Math.max(1, Math.floor(diff / 3600000)) };
      } else {
        obj3 = { unit: "days", days: daysRemaining };
      }
      return obj3;
    }
  }
}
export function formatWishlistShopUnpublishLabel(countdown, compact) {
  let stringResult;
  if ("compact" === compact) {
    let formatToPlainStringResult;
    if ("hours" === countdown.unit) {
      const intl4 = intl5.intl;
      const obj2 = { hours: countdown.hours };
      formatToPlainStringResult = intl4.formatToPlainString(intl5.t.WJieZ2, obj2);
    } else {
      const intl3 = intl5.intl;
      const obj3 = { days: countdown.days };
      formatToPlainStringResult = intl3.formatToPlainString(intl5.t.DkxLY0, obj3);
    }
    stringResult = formatToPlainStringResult;
  } else if ("hours" === countdown.unit) {
    const intl2 = intl5.intl;
    stringResult = intl2.string(intl5.t.Bc13HF);
  } else {
    const intl = intl5.intl;
    const obj = { days: countdown.days };
    stringResult = intl.formatToPlainString(intl5.t.Io7ozn, obj);
  }
  return stringResult;
}
