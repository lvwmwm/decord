// Module ID: 8760
// Function ID: 69209
// Name: _createForOfIteratorHelperLoose
// Dependencies: [653, 5616, 3789, 5619, 6786, 3776, 6785, 8761, 8762, 2]
// Exports: createOrbProfileBadge, filterGPlaySyncedCategories, filterHiddenCategories, getCollectibleGoogleSkuId, getFormattedPriceForCollectiblesProduct

// Module 8760 (_createForOfIteratorHelperLoose)
import { PriceSetAssignmentPurchaseTypes as closure_3 } from "ME";

function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function extractPriceByPurchaseTypes(googleSkuIds) {
  let obj = require(3789) /* isPremiumGiftingSupported */;
  if (obj.isGooglePlayBillingSupported()) {
    if (arg1 !== closure_3.MOBILE) {
      if (arg1 !== closure_3.MOBILE_PREMIUM_TIER_2) {
        return null;
      }
    }
    googleSkuIds = googleSkuIds.googleSkuIds;
    let tmp8;
    if (null != googleSkuIds) {
      tmp8 = googleSkuIds[arg1];
    }
    const product = importDefault(5619).getProduct(tmp8);
    let tmp10;
    if (null != product) {
      obj = {};
      ({ price: obj4.amount, currencyCode: obj4.currency, priceString: obj4.priceString } = product);
      obj.tax = 0;
      obj.taxInclusive = false;
      tmp10 = obj;
    }
    return tmp10;
  } else {
    return require(6786) /* getPriceForCollectiblesProduct */.extractPriceByPurchaseTypes(googleSkuIds, arg1);
  }
}
function isGPlaySynced(variants) {
  if (obj.getIsVariantProduct(variants)) {
    variants = variants.variants;
    return variants.every((arg0) => outer1_7(arg0));
  } else {
    const googleSkuIds = variants.googleSkuIds;
    let tmp4;
    if (null != googleSkuIds) {
      tmp4 = googleSkuIds[closure_3.MOBILE];
    }
    const product = importDefault(5619).getProduct(tmp4);
    const obj2 = importDefault(5619);
    const googleSkuIds2 = variants.googleSkuIds;
    let tmp9;
    if (null != googleSkuIds2) {
      tmp9 = googleSkuIds2[closure_3.MOBILE_PREMIUM_TIER_2];
    }
    const obj3 = importDefault(5619);
    return null != product && null != importDefault(5619).getProduct(tmp9);
  }
  obj = require(6785) /* getProductOrbPrice */;
}
function hasAtLeastOneGPlaySynced(value) {
  const products = value.products;
  return products.filter((arg0) => outer1_7(arg0)).length > 0;
}
const result = require("isPremiumGiftingSupported").fileFinishedImporting("modules/collectibles/native/CollectiblesUtils.tsx");

export const getFormattedPriceForCollectiblesProduct = function getFormattedPriceForCollectiblesProduct(arg0, arg1, arg2) {
  if (!arg2) {
    const tmpResult = tmp(arg0, arg1 ? tmp2.PREMIUM_TIER_2 : tmp2.DEFAULT);
    if (null == tmpResult) {
      return null;
    } else if (null != tmpResult.priceString) {
      let priceString = tmpResult.priceString;
    } else {
      priceString = require(5616) /* formatSingleCurrencyPrice */.formatPrice(tmpResult.amount, tmpResult.currency);
      const obj = require(5616) /* formatSingleCurrencyPrice */;
    }
  }
};
export { extractPriceByPurchaseTypes };
export const getCollectibleGoogleSkuId = function getCollectibleGoogleSkuId(closure_0, stateFromStores) {
  if (null == stateFromStores) {
    return null;
  } else {
    const obj = importDefault(3776);
    const googleSkuIds = closure_0.googleSkuIds;
    let tmp5;
    if (null != googleSkuIds) {
      tmp5 = googleSkuIds[obj.canUseShopDiscounts(obj, stateFromStores) ? tmp3.MOBILE_PREMIUM_TIER_2 : tmp3.MOBILE];
    }
    let tmp6 = null;
    if (null != tmp5) {
      tmp6 = tmp5;
    }
    return tmp6;
  }
};
export { isGPlaySynced };
export const filterGPlaySyncedCategories = function filterGPlaySyncedCategories(items) {
  let iter2;
  if (null == items) {
    return [];
  } else {
    items = [];
    const tmp2 = _createForOfIteratorHelperLoose(items.values());
    let iter = tmp2();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp3 = hasAtLeastOneGPlaySynced;
        if (hasAtLeastOneGPlaySynced(value)) {
          let arr = items.push(value);
        }
        iter2 = tmp2();
        iter = iter2;
      } while (!iter2.done);
    }
    return items;
  }
};
export const filterHiddenCategories = function filterHiddenCategories(result) {
  return result.filter((unpublishedAt) => {
    let tmp = null == unpublishedAt.unpublishedAt;
    if (!tmp) {
      const _Date = Date;
      const date = new Date();
      tmp = unpublishedAt.unpublishedAt > date;
    }
    if (tmp) {
      tmp = unpublishedAt.products.length > 0;
    }
    return tmp;
  });
};
export const createOrbProfileBadge = function createOrbProfileBadge() {
  return { id: require(8761) /* BalanceWidgetMode */.OrbBadges.ORB_PROFILE_BADGE, icon: require(8761) /* BalanceWidgetMode */.OrbBadges.ORB_PROFILE_BADGE, iconSrc: importDefault(8762), description: "", isPreviewMode: true };
};
