// Module ID: 9058
// Function ID: 9059
// Name: collectibles/CollectiblesUtils
// Dependencies: [1085, 6939, 4782, 7131, 7275, 4769, 7274, 8320, 9059, 2]
// Exports: createOrbProfileBadge, extractPriceByPurchaseTypes, filterGPlaySyncedCategories, filterHiddenCategories, getCollectibleGoogleSkuId, getFormattedPriceForCollectiblesProduct, getGoogleSkuIds, isGPlaySynced

// Module 9058 (collectibles/CollectiblesUtils)
import Constants from "Constants" /* 1085 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4769 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4782 */;
import PriceUtils from "PriceUtils" /* 6939 */;
import IAPStoreDefault from "IAPStore" /* 7131 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7274 */;
import types from "types" /* 8320 */;
import _modDef9059 from "module_9059" /* 9059 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const CollectiblesUtils = tmp(7275);
const f100078 = (variants) => {
  let everyResult;
  const obj = closure_1_0(closure_1_2[6]);
  if (obj.getIsVariantProduct(variants)) {
    variants = variants.variants;
    everyResult = variants.every(f100078);
  } else {
    const googleSkuIds = variants.googleSkuIds;
    let tmp5;
    const getProduct = closure_1_1(closure_1_2[3]).getProduct;
    closure_1_1(closure_1_2[3]);
    if (googleSkuIds != null) {
      tmp5 = googleSkuIds[closure_1_3.MOBILE];
    }
    const product = getProduct(tmp5);
    const googleSkuIds2 = variants.googleSkuIds;
    let tmp9;
    const getProduct2 = tmp2(closure_1_2[3]).getProduct;
    closure_1_1(closure_1_2[3]);
    if (googleSkuIds2 != null) {
      tmp9 = googleSkuIds2[closure_1_3.MOBILE_PREMIUM_TIER_2];
    }
    everyResult = null != product && null != getProduct2(tmp9);
  }
  return everyResult;
};
function hasAtLeastOneGPlaySynced(nextResult) {
  const products = nextResult.products;
  return products.filter((variants) => {
    let everyResult;
    let obj = CollectiblesProductUtils;
    if (obj.getIsVariantProduct(variants)) {
      variants = variants.variants;
      everyResult = variants.every(f100078);
    } else {
      const tmp2 = importDefault;
      const tmp3 = require("IAPStore");
      let googleSkuIds = variants.googleSkuIds;
      let tmp5;
      let getProduct = tmp3.getProduct;
      if (googleSkuIds != null) {
        tmp5 = googleSkuIds[closure_1_3.MOBILE];
      }
      let product = getProduct(tmp5);
      const tmp2Result = tmp2(tmp[3]);
      let googleSkuIds2 = variants.googleSkuIds;
      let tmp9;
      let getProduct2 = tmp2Result.getProduct;
      if (googleSkuIds2 != null) {
        tmp9 = googleSkuIds2[closure_1_3.MOBILE_PREMIUM_TIER_2];
      }
      everyResult = null != product && null != getProduct2(tmp9);
    }
    return everyResult;
  }).length > 0;
}
let closure_3 = Constants.PriceSetAssignmentPurchaseTypes;
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesUtils.tsx");

export const getFormattedPriceForCollectiblesProduct = function getFormattedPriceForCollectiblesProduct(googleSkuIds, arg1, arg2) {
  let DEFAULT;
  let result;
  let tmp3;
  const tmp2 = arg2;
  if (tmp2) {
    let MOBILE;
    let tmp4;
    if (arg1) {
      MOBILE = tmp.MOBILE_PREMIUM_TIER_2;
      tmp4 = tmp;
    } else {
      MOBILE = tmp.MOBILE;
      tmp4 = tmp;
    }
    tmp3 = tmp4;
    DEFAULT = MOBILE;
  } else if (arg1) {
    DEFAULT = tmp.PREMIUM_TIER_2;
    tmp3 = tmp;
  } else {
    DEFAULT = tmp.DEFAULT;
    tmp3 = tmp;
  }
  const obj = BillingPlatformUtils;
  if (obj.isGooglePlayBillingSupported()) {
    if (DEFAULT === tmp3.MOBILE) {
      googleSkuIds = googleSkuIds.googleSkuIds;
      let tmp11;
      const getProduct = IAPStoreDefault.getProduct;
      IAPStoreDefault;
      if (googleSkuIds != null) {
        tmp11 = googleSkuIds[DEFAULT];
      }
      const product = getProduct(tmp11);
      let tmp13;
      if (null != product) {
        const obj2 = { amount: null, currency: null, priceString: null, tax: 0, taxInclusive: false };
        ({ price: obj3.amount, currencyCode: obj3.currency, priceString: obj3.priceString } = product);
        tmp13 = obj2;
      }
      result = tmp13;
    } else {
      result = null;
    }
  } else {
    const tmp5Result = CollectiblesUtils;
    result = tmp5Result.extractPriceByPurchaseTypes(googleSkuIds, DEFAULT);
  }
  let tmp14 = null;
  if (null != result) {
    let priceString;
    if (null != result.priceString) {
      priceString = result.priceString;
    } else {
      const tmp5Result2 = PriceUtils;
      priceString = tmp5Result2.formatPrice(result.amount, result.currency);
    }
    tmp14 = priceString;
  }
  return tmp14;
};
export const extractPriceByPurchaseTypes = function extractPriceByPurchaseTypes(googleSkuIds, arg1) {
  const obj = BillingPlatformUtils;
  if (obj.isGooglePlayBillingSupported()) {
    if (arg1 !== closure_3.MOBILE) {
      if (arg1 !== closure_3.MOBILE_PREMIUM_TIER_2) {
        return null;
      }
    }
    googleSkuIds = googleSkuIds.googleSkuIds;
    let tmp6;
    const getProduct = IAPStoreDefault.getProduct;
    IAPStoreDefault;
    if (googleSkuIds != null) {
      tmp6 = googleSkuIds[arg1];
    }
    const product = getProduct(tmp6);
    let tmp8;
    if (null != product) {
      const obj2 = { amount: null, currency: null, priceString: null, tax: 0, taxInclusive: false };
      ({ price: obj3.amount, currencyCode: obj3.currency, priceString: obj3.priceString } = product);
      tmp8 = obj2;
    }
    return tmp8;
  } else {
    const tmpResult = CollectiblesUtils;
    return tmpResult.extractPriceByPurchaseTypes(googleSkuIds, arg1);
  }
};
export const getCollectibleGoogleSkuId = function getCollectibleGoogleSkuId(cResult, stateFromStores) {
  if (null == stateFromStores) {
    return null;
  } else {
    const obj = PremiumUtilsDefault;
    const googleSkuIds = cResult.googleSkuIds;
    let tmp5;
    if (googleSkuIds != null) {
      tmp5 = googleSkuIds[obj.canUseShopDiscounts(obj, stateFromStores) ? tmp3.MOBILE_PREMIUM_TIER_2 : tmp3.MOBILE];
    }
    if (tmp5 == null) {
      tmp5 = null;
    }
    return tmp5;
  }
};
export const getGoogleSkuIds = function getGoogleSkuIds(products) {
  let items = [];
  let item = products.forEach((googleSkuIds) => {
    let tmp2 = undefined !== googleSkuIds.googleSkuIds;
    if (tmp2) {
      tmp2 = null !== googleSkuIds.googleSkuIds;
    }
    if (tmp2) {
      let push = items.push;
      let _Object = Object;
      items = [];
      HermesBuiltin.arraySpread(items, Object.values(googleSkuIds.googleSkuIds), 0);
      HermesBuiltin.apply(push, items, items);
    }
    const obj = CollectiblesProductUtils;
    if (obj.getIsVariantProduct(googleSkuIds)) {
      const variants = googleSkuIds.variants;
      const item = variants.forEach((googleSkuIds) => {
        const tmp2 = undefined !== googleSkuIds.googleSkuIds && null !== googleSkuIds.googleSkuIds;
        if (tmp2) {
          const push = navigation.push;
          const _Object = Object;
          items = [];
          HermesBuiltin.arraySpread(items, Object.values(googleSkuIds.googleSkuIds), 0);
          HermesBuiltin.apply(push, items, navigation);
        }
      });
    }
  });
  return items;
};
export const isGPlaySynced = function isGPlaySynced(variants) {
  const obj = CollectiblesProductUtils;
  if (obj.getIsVariantProduct(variants)) {
    variants = variants.variants;
    return variants.every(f100078);
  } else {
    const googleSkuIds = variants.googleSkuIds;
    let tmp5;
    const getProduct = IAPStoreDefault.getProduct;
    IAPStoreDefault;
    if (googleSkuIds != null) {
      tmp5 = googleSkuIds[closure_3.MOBILE];
    }
    const product = getProduct(tmp5);
    const googleSkuIds2 = variants.googleSkuIds;
    let tmp9;
    const getProduct2 = tmp2(7131).getProduct;
    IAPStoreDefault;
    if (googleSkuIds2 != null) {
      tmp9 = googleSkuIds2[closure_3.MOBILE_PREMIUM_TIER_2];
    }
    const tmp11 = null != product && null != getProduct2(tmp9);
    return tmp11;
  }
};
export const filterGPlaySyncedCategories = function filterGPlaySyncedCategories(items) {
  if (null == items) {
    return [];
  } else {
    items = [];
    const values = items.values();
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp6 = nextResult;
      if (hasAtLeastOneGPlaySynced(nextResult)) {
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  }
};
export const filterHiddenCategories = function filterHiddenCategories(result2) {
  return result2.filter(function(unpublishedAt) {
    let tmp = null == unpublishedAt.unpublishedAt;
    if (!tmp) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      unpublishedAt = unpublishedAt.unpublishedAt;
      tmp = unpublishedAt > new Date();
      const date = new Date();
    }
    if (tmp) {
      tmp = unpublishedAt.products.length > 0;
    }
    return tmp;
  });
};
export const createOrbProfileBadge = function createOrbProfileBadge() {
  const obj = { id: types.OrbBadges.ORB_PROFILE_BADGE, icon: types.OrbBadges.ORB_PROFILE_BADGE, iconSrc: _modDef9059, description: "", isPreviewMode: true };
  return obj;
};
