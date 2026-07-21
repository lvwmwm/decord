// Module ID: 8711
// Function ID: 68927
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: createOrbProfileBadge, filterGPlaySyncedCategories, filterHiddenCategories, getCollectibleGoogleSkuId, getFormattedPriceForCollectiblesProduct

// Module 8711 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      require = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  let obj = require(dependencyMap[2]);
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
    const product = importDefault(dependencyMap[3]).getProduct(tmp8);
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
    return require(dependencyMap[4]).extractPriceByPurchaseTypes(googleSkuIds, arg1);
  }
}
function isGPlaySynced(variants) {
  if (obj.getIsVariantProduct(variants)) {
    variants = variants.variants;
    return variants.every((arg0) => callback(arg0));
  } else {
    const googleSkuIds = variants.googleSkuIds;
    let tmp4;
    if (null != googleSkuIds) {
      tmp4 = googleSkuIds[closure_3.MOBILE];
    }
    const product = importDefault(dependencyMap[3]).getProduct(tmp4);
    const obj2 = importDefault(dependencyMap[3]);
    const googleSkuIds2 = variants.googleSkuIds;
    let tmp9;
    if (null != googleSkuIds2) {
      tmp9 = googleSkuIds2[closure_3.MOBILE_PREMIUM_TIER_2];
    }
    const obj3 = importDefault(dependencyMap[3]);
    return null != product && null != importDefault(dependencyMap[3]).getProduct(tmp9);
  }
  const obj = require(dependencyMap[6]);
}
function hasAtLeastOneGPlaySynced(products) {
  products = products.products;
  return products.filter((arg0) => callback(arg0)).length > 0;
}
let closure_3 = require(dependencyMap[0]).PriceSetAssignmentPurchaseTypes;
const _module = require(dependencyMap[9]);
const result = _module.fileFinishedImporting("modules/collectibles/native/CollectiblesUtils.tsx");

export const getFormattedPriceForCollectiblesProduct = function getFormattedPriceForCollectiblesProduct(arg0, arg1, arg2) {
  if (!arg2) {
    const tmpResult = tmp(arg0, arg1 ? tmp2.PREMIUM_TIER_2 : tmp2.DEFAULT);
    if (null == tmpResult) {
      return null;
    } else if (null != tmpResult.priceString) {
      let priceString = tmpResult.priceString;
    } else {
      priceString = require(dependencyMap[1]).formatPrice(tmpResult.amount, tmpResult.currency);
      const obj = require(dependencyMap[1]);
    }
  }
};
export { extractPriceByPurchaseTypes };
export const getCollectibleGoogleSkuId = function getCollectibleGoogleSkuId(product, stateFromStores) {
  if (null == stateFromStores) {
    return null;
  } else {
    const obj = importDefault(dependencyMap[5]);
    const googleSkuIds = product.googleSkuIds;
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
        let tmp3 = closure_8;
        if (closure_8(value)) {
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
  return { id: require(dependencyMap[7]).OrbBadges.ORB_PROFILE_BADGE, icon: require(dependencyMap[7]).OrbBadges.ORB_PROFILE_BADGE, iconSrc: importDefault(dependencyMap[8]), description: "", isPreviewMode: true };
};
