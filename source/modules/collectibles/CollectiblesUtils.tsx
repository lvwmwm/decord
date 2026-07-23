// Module ID: 6786
// Function ID: 53530
// Name: getPriceForCollectiblesProduct
// Dependencies: [6779, 1874, 6780, 6781, 6787, 655, 653, 482, 3776, 1865, 1867, 6788, 5618, 477, 1876, 22, 1212, 6785, 2]
// Exports: canActionOnProduct, getAnalyticsShopDiscountSource, getAssetDisplayConfig, getAssetForAvatarDecorationProduct, getAvatarDecorations, getCollectibleTypeLabel, getCollectiblesItemTypeForDisplay, getCollectiblesPrice, getCollectiblesProductPriceComparisons, getFormattedPriceForCollectiblesProduct, getLogoSize, getNameplates, getProductDiscount, getProductTypeNameForLogging, getProfileEffects, getProfileFrames, getShopDiscountSource, getStrikeThroughPriceAmountForCollectiblesProduct, groupProfileEffects, isCollectiblesGiftCode, isFreeCollectiblesProduct, isPremiumCollectiblesProduct, isPremiumCollectiblesPurchase, isProductNew, removeRewardProductsFilter, shouldHideGiftingForCurrency, shouldShowLimitedTimeBadge, sortProductsByPrice, sortProductsByUserDiscounts

// Module 6786 (getPriceForCollectiblesProduct)
import { isAvatarDecorationRecord } from "_isNativeReflectConstruct";
import { isNameplateRecord } from "_isNativeReflectConstruct";
import { isProfileEffectRecord } from "_isNativeReflectConstruct";
import { isProfileFrameRecord } from "_isNativeReflectConstruct";
import { AssetDisplayConfigRecord } from "AssetDisplayConfigRecord";
import items from "items";
import ME from "ME";
import { CurrencyCodes } from "sum";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_8;
let closure_9;
function getPriceForCollectiblesProduct(closure_0, c5, arg2) {
  if (!arg2) {
    return tmp(closure_0, c5 ? tmp2.PREMIUM_TIER_2 : tmp2.DEFAULT);
  }
}
function getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult, DISCORD_ORB) {
  if (!obj.isAndroid()) {
    const obj2 = require(477) /* set */;
  }
  return canUseShopDiscountsResult ? closure_13.PREMIUM_TIER_2 : closure_13.DEFAULT;
}
function getBundleItemsPriceSum(bundledProducts, DISCORD_ORB) {
  let closure_0 = DISCORD_ORB;
  bundledProducts = bundledProducts.bundledProducts;
  if (null == bundledProducts) {
    return 0;
  } else {
    let closure_1 = getDefaultPriceSetAssignmentPurchaseType(false, DISCORD_ORB);
    return bundledProducts.reduce((arg0, arg1) => {
      let amount;
      const tmp2 = outer1_22(arg1, closure_1, closure_0);
      if (null != tmp2) {
        amount = tmp2.amount;
      }
      let num = 0;
      if (null != amount) {
        num = amount;
      }
      return arg0 + num;
    }, 0);
  }
}
function extractPriceByPurchaseTypes(arg0, arg1, arg2) {
  let closure_0 = arg2;
  let prices;
  if (null != arg0.prices[arg1]) {
    const countryPrices = tmp.countryPrices;
    if (null != countryPrices) {
      prices = countryPrices.prices;
    }
  }
  let tmp3 = null;
  if (null != prices) {
    if (null == arg2) {
      let first = prices[0];
    } else {
      first = prices.find((currency) => currency.currency === closure_0);
    }
    let tmp5 = null;
    if (null != first) {
      tmp5 = first;
    }
    tmp3 = tmp5;
  }
  return tmp3;
}
function extendVariantsProducts(flatMapResult) {
  return flatMapResult.reduce((arr, type) => {
    let closure_0 = type;
    if (null != type) {
      if (type.type === outer1_0(outer1_2[14]).CollectiblesItemType.VARIANTS_GROUP) {
        if (null != type.variants) {
          const variants = type.variants;
          let combined = outer1_0(outer1_2[15]).concat(arr, variants.map((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj["variantGroupStoreListingId"] = type.storeListingId;
            obj["eligibleOffers"] = type.eligibleOffers;
            return obj;
          }));
          let obj = outer1_0(outer1_2[15]);
        }
        return combined;
      }
    }
    arr.push(type);
    combined = arr;
  }, []);
}
function getProductsFromCategories(closure_19, arg1) {
  const items = [...closure_19.values()];
  const flatMapResult = require(22) /* apply */.flatMap(items, "products");
  const obj = require(22) /* apply */;
  let tmp2 = flatMapResult;
  if (arg1) {
    tmp2 = extendVariantsProducts(flatMapResult);
  }
  return require(22) /* apply */.uniqBy(tmp2, "storeListingId");
}
function getItemRecordsFromPurchases(arr, AVATAR_DECORATION) {
  if (AVATAR_DECORATION === require(1876) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION) {
    const items = [];
    HermesBuiltin.arraySpread(arr.values(), 0);
    const obj7 = require(22) /* apply */;
    const found = require(22) /* apply */.flatMap(items, "items").filter(isAvatarDecorationRecord);
    const flatMapResult = require(22) /* apply */.flatMap(items, "items");
    return require(22) /* apply */.uniqBy(found, "skuId");
  } else if (AVATAR_DECORATION === require(1876) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE) {
    const items1 = [];
    HermesBuiltin.arraySpread(arr.values(), 0);
    const obj5 = require(22) /* apply */;
    const found1 = require(22) /* apply */.flatMap(items1, "items").filter(isNameplateRecord);
    const flatMapResult1 = require(22) /* apply */.flatMap(items1, "items");
    return require(22) /* apply */.uniqBy(found1, "skuId");
  } else if (AVATAR_DECORATION === require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT) {
    const items2 = [];
    HermesBuiltin.arraySpread(arr.values(), 0);
    const obj3 = require(22) /* apply */;
    const found2 = require(22) /* apply */.flatMap(items2, "items").filter(isProfileEffectRecord);
    const flatMapResult2 = require(22) /* apply */.flatMap(items2, "items");
    return require(22) /* apply */.uniqBy(found2, "skuId");
  } else if (AVATAR_DECORATION === require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME) {
    const items3 = [];
    HermesBuiltin.arraySpread(arr.values(), 0);
    const obj = require(22) /* apply */;
    const found3 = require(22) /* apply */.flatMap(items3, "items").filter(isProfileFrameRecord);
    const flatMapResult3 = require(22) /* apply */.flatMap(items3, "items");
    return require(22) /* apply */.uniqBy(found3, "skuId");
  } else {
    return [];
  }
}
function getItemRecordsFromCategories(first, AVATAR_DECORATION) {
  const tmp = getProductsFromCategories(first, true);
  if (AVATAR_DECORATION === require(1876) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION) {
    const obj7 = require(22) /* apply */;
    const found = require(22) /* apply */.flatMap(tmp, "items").filter(isAvatarDecorationRecord);
    const flatMapResult = require(22) /* apply */.flatMap(tmp, "items");
    return require(22) /* apply */.uniqBy(found, "skuId");
  } else if (AVATAR_DECORATION === require(1876) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE) {
    const obj5 = require(22) /* apply */;
    const found1 = require(22) /* apply */.flatMap(tmp, "items").filter(isNameplateRecord);
    const flatMapResult1 = require(22) /* apply */.flatMap(tmp, "items");
    return require(22) /* apply */.uniqBy(found1, "skuId");
  } else if (AVATAR_DECORATION === require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT) {
    const obj3 = require(22) /* apply */;
    const found2 = require(22) /* apply */.flatMap(tmp, "items").filter(isProfileEffectRecord);
    const flatMapResult2 = require(22) /* apply */.flatMap(tmp, "items");
    return require(22) /* apply */.uniqBy(found2, "skuId");
  } else if (AVATAR_DECORATION === require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME) {
    const obj = require(22) /* apply */;
    const found3 = require(22) /* apply */.flatMap(tmp, "items").filter(isProfileFrameRecord);
    const flatMapResult3 = require(22) /* apply */.flatMap(tmp, "items");
    return require(22) /* apply */.uniqBy(found3, "skuId");
  } else {
    return [];
  }
}
function getAvatarDecorationsFromPurchases(stateFromStores) {
  return getItemRecordsFromPurchases(stateFromStores, require(1876) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION);
}
function getAvatarDecorationsFromCategories(categories) {
  return getItemRecordsFromCategories(categories, require(1876) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION);
}
function getNameplatesFromPurchases(stateFromStores) {
  return getItemRecordsFromPurchases(stateFromStores, require(1876) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE);
}
function getNameplatesFromCategories(first) {
  return getItemRecordsFromCategories(first, require(1876) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE);
}
function getProfileEffectsFromPurchases(stateFromStores) {
  return getItemRecordsFromPurchases(stateFromStores, require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT);
}
function getProfileEffectsFromCategories(first) {
  return getItemRecordsFromCategories(first, require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT);
}
function getProfileFramesFromPurchases(stateFromStores) {
  return getItemRecordsFromPurchases(stateFromStores, require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME);
}
function getProfileFramesFromCategories(first) {
  return getItemRecordsFromCategories(first, require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME);
}
function getDaysRemaining(date) {
  date = new Date();
  const fullYear = date.getFullYear();
  const month = date.getMonth();
  const fullYear1 = date.getFullYear();
  const month1 = date.getMonth();
  return Math.floor((Date.UTC(fullYear1, month1, date.getDate()) - Date.UTC(fullYear, month, date.getDate())) / 86400000);
}
function isBundleProduct(type) {
  type = undefined;
  if (null != type) {
    type = type.type;
  }
  return type === require(1876) /* CollectiblesItemType */.CollectiblesItemType.BUNDLE;
}
({ EXTERNAL_PRODUCT_SKU_IDS: closure_8, LIMITED_TIME_BADGE_DAYS_THRESHOLD: closure_9, SHOP_CARD_PER_PRODUCT_NEW_BADGE_EXPIRY_SETTINGS: closure_10 } = items);
({ COLLECTIBLES_APPLICATION_ID: closure_11, EntitlementTypes: closure_12, PriceSetAssignmentPurchaseTypes: closure_13 } = ME);
let obj = { NITRO: "nitro", THIRDPARTY: "thirdparty" };
let closure_16 = { [obj.NITRO]: "nitro", [obj.THIRDPARTY]: "xbox" };
obj = { original: -1, discountPercentage: -1 };
items = [, , ];
({ KZT: arr[0], NGN: arr[1], EGP: arr[2] } = CurrencyCodes);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/CollectiblesUtils.tsx");

export const ShopDiscountSource = obj;
export const getAnalyticsShopDiscountSource = function getAnalyticsShopDiscountSource(shopDiscountSource) {
  let tmp = null;
  if (null != shopDiscountSource) {
    tmp = table2[shopDiscountSource];
  }
  return tmp;
};
export const getShopDiscountSource = function getShopDiscountSource(currentUser) {
  const obj = importDefault(3776);
  if (obj.canUseShopDiscounts(currentUser)) {
    if (obj2.canUseCollectibles(currentUser)) {
      return obj.NITRO;
    } else {
      let perks;
      if (null != currentUser) {
        perks = currentUser.perks;
      }
      const perkSource = require(1865) /* parseServerPerkConfigKind */.getPerkSource(perks, require(1867) /* _callSuper */.Perk.SHOP_DISCOUNTS);
      if (null != perkSource) {
        if (perkSource.includes(require(1867) /* _callSuper */.PerkSource.SOURCE_NITRO)) {
          let NITRO = obj.NITRO;
        }
        return NITRO;
      }
      const obj3 = require(1865) /* parseServerPerkConfigKind */;
      NITRO = null;
      if (obj5.getIsCrepeEnabled("getShopDiscountSource")) {
        NITRO = null;
        if (null != perkSource) {
          NITRO = null;
          if (perkSource.includes(require(1867) /* _callSuper */.PerkSource.SOURCE_THIRDPARTY_CROISSANT)) {
            NITRO = obj.THIRDPARTY;
          }
        }
      }
      obj5 = require(6788) /* apexExperiment */;
    }
    obj2 = importDefault(3776);
  } else {
    return null;
  }
};
export const isPremiumCollectiblesProduct = function isPremiumCollectiblesProduct(product) {
  let premiumType;
  if (null != product) {
    premiumType = product.premiumType;
  }
  return null != premiumType;
};
export const isPremiumCollectiblesPurchase = function isPremiumCollectiblesPurchase(purchase) {
  let purchaseType;
  if (null != purchase) {
    purchaseType = purchase.purchaseType;
  }
  return purchaseType === constants.PREMIUM_PURCHASE;
};
export const getAssetForAvatarDecorationProduct = function getAssetForAvatarDecorationProduct(items) {
  items = items.items;
  const found = items.find(isAvatarDecorationRecord);
  let asset;
  if (null != found) {
    asset = found.asset;
  }
  return asset;
};
export { getPriceForCollectiblesProduct };
export const getFormattedPriceForCollectiblesProduct = function getFormattedPriceForCollectiblesProduct(closure_0, c5) {
  const tmp = getPriceForCollectiblesProduct(closure_0, c5, arg2);
  let str = "";
  if (null != tmp) {
    let amount;
    if (null != tmp) {
      amount = tmp.amount;
    }
    let currency;
    if (null != tmp) {
      currency = tmp.currency;
    }
    str = require(5618) /* formatSingleCurrencyPrice */.formatPrice(amount, currency);
    const obj = require(5618) /* formatSingleCurrencyPrice */;
  }
  return str;
};
export { getDefaultPriceSetAssignmentPurchaseType };
export { getBundleItemsPriceSum };
export { extractPriceByPurchaseTypes };
export const NoDiscount = obj;
export const DISCOUNT_DISPLAY_MINIMUM_THRESHOLD = 5;
export const getProductDiscount = function getProductDiscount(product, hasShopDiscount, DISCORD_ORB) {
  if (null == product) {
    return obj;
  } else {
    const tmp2 = getBundleItemsPriceSum(product, DISCORD_ORB);
    if (tmp2 <= 0) {
      return obj;
    } else {
      const tmp6 = extractPriceByPurchaseTypes(product, getDefaultPriceSetAssignmentPurchaseType(hasShopDiscount, DISCORD_ORB), DISCORD_ORB);
      if (null != tmp6) {
        obj = { original: tmp2 };
        const _Math = Math;
        obj.discountPercentage = Math.round((tmp2 - tmp6.amount) / tmp2 * 100);
      }
      return obj;
    }
  }
};
export const getCollectiblesProductPriceComparisons = function getCollectiblesProductPriceComparisons(type, hasShopDiscount) {
  hasShopDiscount = hasShopDiscount.hasShopDiscount;
  const tmp = extractPriceByPurchaseTypes(type, closure_13.DEFAULT);
  if (null == tmp) {
    return null;
  } else if (tmp.amount <= 0) {
    let obj = { defaultPrice: tmp, showDefaultPriceOnly: true };
    return obj;
  } else {
    const tmp9 = extractPriceByPurchaseTypes(type, closure_13.PREMIUM_TIER_2);
    let tmp2 = tmp;
    if (isBundleProduct(type)) {
      tmp2 = tmp;
      if (hasShopDiscount) {
        obj = {};
        const merged = Object.assign(tmp);
        obj["amount"] = hasShopDiscount.discount.original;
        tmp2 = obj;
      }
    }
    if (hasShopDiscount) {
      hasShopDiscount = null != tmp9;
    }
    let tmp6 = tmp2;
    if (hasShopDiscount) {
      tmp6 = tmp9;
    }
    obj = { defaultPrice: tmp, originalPrice: tmp2, premiumPrice: tmp9, finalPrice: tmp6, showDiscountPrice: hasShopDiscount, finalPriceIsDifferent: tmp6.amount !== tmp2.amount, showDefaultPriceOnly: false };
    return obj;
  }
};
export const isFreeCollectiblesProduct = function isFreeCollectiblesProduct(product) {
  let amount;
  const tmp2 = extractPriceByPurchaseTypes(product, closure_13.DEFAULT);
  if (null != tmp2) {
    amount = tmp2.amount;
  }
  return 0 === amount;
};
export { extendVariantsProducts };
export { getProductsFromCategories };
export { getItemRecordsFromPurchases };
export { getItemRecordsFromCategories };
export const getCollectibleTypeLabel = function getCollectibleTypeLabel(type) {
  if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t["7v0T9P"]);
  } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.wR5wOo);
  } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE === type) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.x5CoXR);
  } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME === type) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.GWrZOd);
  } else {
    return null;
  }
};
export const getAssetDisplayConfig = function getAssetDisplayConfig(banner_display_config) {
  let fromServerResult;
  if (null != banner_display_config) {
    fromServerResult = AssetDisplayConfigRecord.fromServer(banner_display_config);
  }
  return fromServerResult;
};
export { getAvatarDecorationsFromPurchases };
export { getAvatarDecorationsFromCategories };
export const getAvatarDecorations = function getAvatarDecorations(stateFromStores, first) {
  const items = [...getAvatarDecorationsFromPurchases(stateFromStores), ...getAvatarDecorationsFromCategories(first)];
  return require(22) /* apply */.uniqBy(items, "skuId");
};
export { getNameplatesFromPurchases };
export { getNameplatesFromCategories };
export const getNameplates = function getNameplates(stateFromStores, first) {
  const items = [...getNameplatesFromPurchases(stateFromStores), ...getNameplatesFromCategories(first)];
  return require(22) /* apply */.uniqBy(items, "skuId");
};
export { getProfileEffectsFromPurchases };
export { getProfileEffectsFromCategories };
export const getProfileEffects = function getProfileEffects(stateFromStores, first) {
  const items = [...getProfileEffectsFromPurchases(stateFromStores), ...getProfileEffectsFromCategories(first)];
  return require(22) /* apply */.uniqBy(items, "skuId");
};
export const groupProfileEffects = function groupProfileEffects(first, stateFromStores) {
  const tmp = getProfileEffectsFromPurchases(stateFromStores);
  const require = tmp;
  const arr = getProfileEffectsFromCategories(first);
  return {
    purchased: tmp,
    shopPreviews: getProfileEffectsFromCategories(first).filter((skuId) => {
      skuId = skuId.skuId;
      return !skuId.some((skuId) => skuId.skuId === skuId);
    })
  };
};
export { getProfileFramesFromPurchases };
export { getProfileFramesFromCategories };
export const getProfileFrames = function getProfileFrames(stateFromStores, first) {
  const items = [...getProfileFramesFromPurchases(stateFromStores), ...getProfileFramesFromCategories(first)];
  return require(22) /* apply */.uniqBy(items, "skuId");
};
export const isCollectiblesGiftCode = function isCollectiblesGiftCode(giftCode) {
  return giftCode.applicationId === closure_11;
};
export const LOGO_ASPECT_RATIO = 3.8;
export const getLogoSize = function getLogoSize(arg0) {
  return 3.8 * arg0;
};
export { getDaysRemaining };
export const shouldShowLimitedTimeBadge = function shouldShowLimitedTimeBadge(date) {
  let tmp = null != date;
  if (tmp) {
    tmp = getDaysRemaining(date) <= closure_9;
  }
  return tmp;
};
export const isProductNew = function isProductNew(skuId) {
  let tmp2 = null != tmp;
  if (tmp2) {
    const _Date = Date;
    const date = new Date();
    tmp2 = date.getTime() < tmp;
  }
  return tmp2;
};
export { isBundleProduct };
export const getCollectiblesItemTypeForDisplay = function getCollectiblesItemTypeForDisplay(type) {
  if (null != type) {
    if (type.type === require(1876) /* CollectiblesItemType */.CollectiblesItemType.BUNDLE) {
      type = require(1876) /* CollectiblesItemType */.CollectiblesItemType.BUNDLE;
    } else {
      const items = type.items;
      if (null != items) {
        const first = items[0];
        if (null != first) {
          type = first.type;
        }
      }
    }
    return type;
  }
};
export const getCollectiblesPrice = function getCollectiblesPrice(arg0) {
  let invoicePreview;
  let selectedSkuId;
  ({ invoicePreview, selectedSkuId } = arg0);
  let unitPrice;
  if (null != invoicePreview) {
    const invoiceItems = invoicePreview.invoiceItems;
    if (null != invoiceItems) {
      const first = invoiceItems[0];
      if (null != first) {
        unitPrice = first.unitPrice;
      }
    }
  }
  let tmp3;
  if (null != unitPrice) {
    let obj = {};
    ({ amount: obj.amount, currency: obj.currency } = unitPrice);
    tmp3 = obj;
  }
  let tmp4 = tmp3;
  if (null == tmp3) {
    tmp4 = tmp3;
    if (null != selectedSkuId) {
      let price;
      if (null != arg0.skusById[selectedSkuId]) {
        price = tmp5.price;
      }
      tmp4 = tmp3;
      if (null != price) {
        obj = { amount: tmp5.price.amount, currency: tmp5.price.currency };
        tmp4 = obj;
      }
    }
  }
  return tmp4;
};
export const shouldHideGiftingForCurrency = function shouldHideGiftingForCurrency(currency) {
  let hasItem = null != currency;
  if (hasItem) {
    hasItem = items.includes(currency);
  }
  return hasItem;
};
export const getStrikeThroughPriceAmountForCollectiblesProduct = function getStrikeThroughPriceAmountForCollectiblesProduct(closure_0, c5, arg2) {
  if (isBundleProduct(closure_0)) {
    return getBundleItemsPriceSum(closure_0);
  } else if (!c5) {
    const tmpResult = tmp(closure_0, arg2 ? tmp2.MOBILE_PREMIUM_TIER_2 : tmp2.PREMIUM_TIER_2);
    let amount;
    if (null != tmpResult) {
      amount = tmpResult.amount;
    }
    return amount;
  }
};
export const canActionOnProduct = function canActionOnProduct(arg0) {
  let isPartiallyOwnedBundle;
  let product;
  ({ product, isPartiallyOwnedBundle } = arg0);
  if (!isPartiallyOwnedBundle) {
    let skuId;
    if (null != product) {
      skuId = product.skuId;
    }
    isPartiallyOwnedBundle = closure_8.ORB_PROFILE_BADGE === skuId && tmp;
    const tmp5 = closure_8.ORB_PROFILE_BADGE === skuId && tmp;
  }
  return !isPartiallyOwnedBundle;
};
export const getProductTypeNameForLogging = function getProductTypeNameForLogging(arg0, arg1) {
  if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION === arg0) {
    return "avatar decoration";
  } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT === arg0) {
    return "profile effect";
  } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE === arg0) {
    return "nameplate";
  } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME === arg0) {
    return "profile frame";
  } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.BUNDLE === arg0) {
    return "bundle";
  } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.EXTERNAL_SKU === arg0) {
    let str3 = "3-day nitro credit";
    if (arg1 !== closure_8.FRACTIONAL_PREMIUM) {
      let str4 = "1-day nitro credit";
      if (arg1 !== closure_8.FRACTIONAL_PREMIUM_1_DAY) {
        let str5 = "unknown";
        if (arg1 === closure_8.ORB_PROFILE_BADGE) {
          str5 = "orb profile badge";
        }
        str4 = str5;
      }
      str3 = str4;
    }
    return str3;
  } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.VARIANTS_GROUP === arg0) {
    return "variants group";
  } else {
    return "unknown";
  }
};
export const sortProductsByPrice = function sortProductsByPrice(arr) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  return arr.sort((product, product2) => {
    if (closure_1) {
      let obj = callback(outer1_2[17]);
      obj = { product, hasShopDiscount: callback };
      let productOrbPrice = obj.getProductOrbPrice(obj);
    } else {
      productOrbPrice = outer1_19(product, callback, true);
    }
    if (closure_1) {
      obj = { product: product2, hasShopDiscount: callback };
      let productOrbPrice1 = callback(outer1_2[17]).getProductOrbPrice(obj);
      const obj3 = callback(outer1_2[17]);
    } else {
      productOrbPrice1 = outer1_19(product2, callback, true);
    }
    let amount;
    if (null != productOrbPrice) {
      amount = productOrbPrice.amount;
    }
    let num3 = 0;
    if (null != amount) {
      num3 = amount;
    }
    let amount1;
    if (null != productOrbPrice1) {
      amount1 = productOrbPrice1.amount;
    }
    let num4 = 0;
    if (null != amount1) {
      num4 = amount1;
    }
    return num3 - num4;
  });
};
export const sortProductsByUserDiscounts = function sortProductsByUserDiscounts(arr, arr2) {
  if (0 !== arr2.length) {
    if (0 !== arr.length) {
      let closure_0 = arr2.map((discountId) => discountId.discountId);
      return arr.sort((eligibleOffers, eligibleOffers2) => {
        eligibleOffers = eligibleOffers.eligibleOffers;
        let someResult;
        if (null != eligibleOffers) {
          someResult = eligibleOffers.some((arg0) => outer1_0.includes(arg0));
        }
        eligibleOffers2 = eligibleOffers2.eligibleOffers;
        let someResult1;
        if (null != eligibleOffers2) {
          someResult1 = eligibleOffers2.some((arg0) => outer1_0.includes(arg0));
        }
        return +null != someResult1 && someResult1 - +null != someResult && someResult;
      });
    }
  }
  return arr;
};
export const removeRewardProductsFilter = function removeRewardProductsFilter(arr) {
  return arr.filter((isCategoryReward) => !isCategoryReward.isCategoryReward);
};
