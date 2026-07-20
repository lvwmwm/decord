// Module ID: 6775
// Function ID: 53430
// Name: getPriceForCollectiblesProduct
// Dependencies: []
// Exports: canActionOnProduct, getAnalyticsShopDiscountSource, getAssetDisplayConfig, getAssetForAvatarDecorationProduct, getAvatarDecorations, getCollectibleTypeLabel, getCollectiblesItemTypeForDisplay, getCollectiblesPrice, getCollectiblesProductPriceComparisons, getFormattedPriceForCollectiblesProduct, getLogoSize, getNameplates, getProductDiscount, getProductTypeNameForLogging, getProfileEffects, getProfileFrames, getShopDiscountSource, getStrikeThroughPriceAmountForCollectiblesProduct, groupProfileEffects, isCollectiblesGiftCode, isFreeCollectiblesProduct, isPremiumCollectiblesProduct, isPremiumCollectiblesPurchase, isProductNew, removeRewardProductsFilter, shouldHideGiftingForCurrency, shouldShowLimitedTimeBadge, sortProductsByPrice, sortProductsByUserDiscounts

// Module 6775 (getPriceForCollectiblesProduct)
function getPriceForCollectiblesProduct(stateFromStores, canUseCollectiblesResult, arg2) {
  if (!arg2) {
    return tmp(stateFromStores, canUseCollectiblesResult ? tmp2.PREMIUM_TIER_2 : tmp2.DEFAULT);
  }
}
function getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult, DISCORD_ORB) {
  if (!obj.isAndroid()) {
    const obj2 = require(dependencyMap[13]);
  }
  return canUseShopDiscountsResult ? closure_13.PREMIUM_TIER_2 : closure_13.DEFAULT;
}
function getBundleItemsPriceSum(bundledProducts, DISCORD_ORB) {
  const require = DISCORD_ORB;
  bundledProducts = bundledProducts.bundledProducts;
  if (null == bundledProducts) {
    return 0;
  } else {
    let closure_1 = getDefaultPriceSetAssignmentPurchaseType(false, DISCORD_ORB);
    return bundledProducts.reduce((arg0, arg1) => {
      let amount;
      const tmp2 = callback(arg1, closure_1, arg1);
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
  const require = arg2;
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
      first = prices.find((currency) => currency.currency === arg2);
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
    if (null != type) {
      if (type.type === type(closure_2[14]).CollectiblesItemType.VARIANTS_GROUP) {
        if (null != type.variants) {
          const variants = type.variants;
          let combined = type(closure_2[15]).concat(arr, variants.map((arg0, self) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj["variantGroupStoreListingId"] = self.storeListingId;
            obj["eligibleOffers"] = self.eligibleOffers;
            return obj;
          }));
          const obj = type(closure_2[15]);
        }
        return combined;
      }
    }
    arr.push(type);
    combined = arr;
  }, []);
}
function getProductsFromCategories(map, arg1) {
  const items = [...map.values()];
  const flatMapResult = require(dependencyMap[15]).flatMap(items, "products");
  const obj = require(dependencyMap[15]);
  let tmp2 = flatMapResult;
  if (arg1) {
    tmp2 = extendVariantsProducts(flatMapResult);
  }
  return require(dependencyMap[15]).uniqBy(tmp2, "storeListingId");
}
function getItemRecordsFromPurchases(arr, AVATAR_DECORATION) {
  if (AVATAR_DECORATION === require(dependencyMap[14]).CollectiblesItemType.AVATAR_DECORATION) {
    const items = [];
    HermesBuiltin.arraySpread(arr.values(), 0);
    const obj7 = require(dependencyMap[15]);
    const found = require(dependencyMap[15]).flatMap(items, "items").filter(isAvatarDecorationRecord);
    const flatMapResult = require(dependencyMap[15]).flatMap(items, "items");
    return require(dependencyMap[15]).uniqBy(found, "skuId");
  } else if (AVATAR_DECORATION === require(dependencyMap[14]).CollectiblesItemType.NAMEPLATE) {
    const items1 = [];
    HermesBuiltin.arraySpread(arr.values(), 0);
    const obj5 = require(dependencyMap[15]);
    const found1 = require(dependencyMap[15]).flatMap(items1, "items").filter(isNameplateRecord);
    const flatMapResult1 = require(dependencyMap[15]).flatMap(items1, "items");
    return require(dependencyMap[15]).uniqBy(found1, "skuId");
  } else if (AVATAR_DECORATION === require(dependencyMap[14]).CollectiblesItemType.PROFILE_EFFECT) {
    const items2 = [];
    HermesBuiltin.arraySpread(arr.values(), 0);
    const obj3 = require(dependencyMap[15]);
    const found2 = require(dependencyMap[15]).flatMap(items2, "items").filter(isProfileEffectRecord);
    const flatMapResult2 = require(dependencyMap[15]).flatMap(items2, "items");
    return require(dependencyMap[15]).uniqBy(found2, "skuId");
  } else if (AVATAR_DECORATION === require(dependencyMap[14]).CollectiblesItemType.PROFILE_FRAME) {
    const items3 = [];
    HermesBuiltin.arraySpread(arr.values(), 0);
    const obj = require(dependencyMap[15]);
    const found3 = require(dependencyMap[15]).flatMap(items3, "items").filter(isProfileFrameRecord);
    const flatMapResult3 = require(dependencyMap[15]).flatMap(items3, "items");
    return require(dependencyMap[15]).uniqBy(found3, "skuId");
  } else {
    return [];
  }
}
function getItemRecordsFromCategories(categories, AVATAR_DECORATION) {
  const tmp = getProductsFromCategories(categories, true);
  if (AVATAR_DECORATION === require(dependencyMap[14]).CollectiblesItemType.AVATAR_DECORATION) {
    const obj7 = require(dependencyMap[15]);
    const found = require(dependencyMap[15]).flatMap(tmp, "items").filter(isAvatarDecorationRecord);
    const flatMapResult = require(dependencyMap[15]).flatMap(tmp, "items");
    return require(dependencyMap[15]).uniqBy(found, "skuId");
  } else if (AVATAR_DECORATION === require(dependencyMap[14]).CollectiblesItemType.NAMEPLATE) {
    const obj5 = require(dependencyMap[15]);
    const found1 = require(dependencyMap[15]).flatMap(tmp, "items").filter(isNameplateRecord);
    const flatMapResult1 = require(dependencyMap[15]).flatMap(tmp, "items");
    return require(dependencyMap[15]).uniqBy(found1, "skuId");
  } else if (AVATAR_DECORATION === require(dependencyMap[14]).CollectiblesItemType.PROFILE_EFFECT) {
    const obj3 = require(dependencyMap[15]);
    const found2 = require(dependencyMap[15]).flatMap(tmp, "items").filter(isProfileEffectRecord);
    const flatMapResult2 = require(dependencyMap[15]).flatMap(tmp, "items");
    return require(dependencyMap[15]).uniqBy(found2, "skuId");
  } else if (AVATAR_DECORATION === require(dependencyMap[14]).CollectiblesItemType.PROFILE_FRAME) {
    const obj = require(dependencyMap[15]);
    const found3 = require(dependencyMap[15]).flatMap(tmp, "items").filter(isProfileFrameRecord);
    const flatMapResult3 = require(dependencyMap[15]).flatMap(tmp, "items");
    return require(dependencyMap[15]).uniqBy(found3, "skuId");
  } else {
    return [];
  }
}
function getAvatarDecorationsFromPurchases(arr) {
  return getItemRecordsFromPurchases(arr, require(dependencyMap[14]).CollectiblesItemType.AVATAR_DECORATION);
}
function getAvatarDecorationsFromCategories(categories) {
  return getItemRecordsFromCategories(categories, require(dependencyMap[14]).CollectiblesItemType.AVATAR_DECORATION);
}
function getNameplatesFromPurchases(arr) {
  return getItemRecordsFromPurchases(arr, require(dependencyMap[14]).CollectiblesItemType.NAMEPLATE);
}
function getNameplatesFromCategories(categories) {
  return getItemRecordsFromCategories(categories, require(dependencyMap[14]).CollectiblesItemType.NAMEPLATE);
}
function getProfileEffectsFromPurchases(arr) {
  return getItemRecordsFromPurchases(arr, require(dependencyMap[14]).CollectiblesItemType.PROFILE_EFFECT);
}
function getProfileEffectsFromCategories(categories) {
  return getItemRecordsFromCategories(categories, require(dependencyMap[14]).CollectiblesItemType.PROFILE_EFFECT);
}
function getProfileFramesFromPurchases(arr) {
  return getItemRecordsFromPurchases(arr, require(dependencyMap[14]).CollectiblesItemType.PROFILE_FRAME);
}
function getProfileFramesFromCategories(categories) {
  return getItemRecordsFromCategories(categories, require(dependencyMap[14]).CollectiblesItemType.PROFILE_FRAME);
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
  return type === require(dependencyMap[14]).CollectiblesItemType.BUNDLE;
}
const isAvatarDecorationRecord = require(dependencyMap[0]).isAvatarDecorationRecord;
const isNameplateRecord = require(dependencyMap[1]).isNameplateRecord;
const isProfileEffectRecord = require(dependencyMap[2]).isProfileEffectRecord;
const isProfileFrameRecord = require(dependencyMap[3]).isProfileFrameRecord;
const AssetDisplayConfigRecord = require(dependencyMap[4]).AssetDisplayConfigRecord;
const _module = require(dependencyMap[5]);
({ EXTERNAL_PRODUCT_SKU_IDS: closure_8, LIMITED_TIME_BADGE_DAYS_THRESHOLD: closure_9, SHOP_CARD_PER_PRODUCT_NEW_BADGE_EXPIRY_SETTINGS: closure_10 } = _module);
const _module1 = require(dependencyMap[6]);
({ COLLECTIBLES_APPLICATION_ID: closure_11, EntitlementTypes: closure_12, PriceSetAssignmentPurchaseTypes: closure_13 } = _module1);
const CurrencyCodes = require(dependencyMap[7]).CurrencyCodes;
let obj = { NITRO: "nitro", THIRDPARTY: "thirdparty" };
let closure_16 = { [obj.NITRO]: "nitro", [obj.THIRDPARTY]: "xbox" };
obj = { relieved: false, relieved_face: false };
const items = [, , ];
({ KZT: arr[0], NGN: arr[1], EGP: arr[2] } = CurrencyCodes);
const _module2 = require(dependencyMap[18]);
const result = _module2.fileFinishedImporting("modules/collectibles/CollectiblesUtils.tsx");

export const ShopDiscountSource = obj;
export const getAnalyticsShopDiscountSource = function getAnalyticsShopDiscountSource(shopDiscountSource) {
  let tmp = null;
  if (null != shopDiscountSource) {
    tmp = closure_16[shopDiscountSource];
  }
  return tmp;
};
export const getShopDiscountSource = function getShopDiscountSource(currentUser) {
  const obj = importDefault(dependencyMap[8]);
  if (obj.canUseShopDiscounts(currentUser)) {
    if (obj2.canUseCollectibles(currentUser)) {
      return obj.NITRO;
    } else {
      let perks;
      if (null != currentUser) {
        perks = currentUser.perks;
      }
      const perkSource = require(dependencyMap[9]).getPerkSource(perks, require(dependencyMap[10]).Perk.SHOP_DISCOUNTS);
      if (null != perkSource) {
        if (perkSource.includes(require(dependencyMap[10]).PerkSource.SOURCE_NITRO)) {
          let NITRO = obj.NITRO;
        }
        return NITRO;
      }
      const obj3 = require(dependencyMap[9]);
      NITRO = null;
      if (obj5.getIsCrepeEnabled("getShopDiscountSource")) {
        NITRO = null;
        if (null != perkSource) {
          NITRO = null;
          if (perkSource.includes(require(dependencyMap[10]).PerkSource.SOURCE_THIRDPARTY_CROISSANT)) {
            NITRO = obj.THIRDPARTY;
          }
        }
      }
      const obj5 = require(dependencyMap[11]);
    }
    const obj2 = importDefault(dependencyMap[8]);
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
export const getFormattedPriceForCollectiblesProduct = function getFormattedPriceForCollectiblesProduct(stateFromStores, canUseCollectiblesResult) {
  const tmp = getPriceForCollectiblesProduct(stateFromStores, canUseCollectiblesResult, arg2);
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
    str = require(dependencyMap[12]).formatPrice(amount, currency);
    const obj = require(dependencyMap[12]);
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
        const obj = { original: tmp2 };
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
  if (require(dependencyMap[14]).CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl4 = require(dependencyMap[16]).intl;
    return intl4.string(require(dependencyMap[16]).t.7v0T9P);
  } else if (require(dependencyMap[14]).CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl3 = require(dependencyMap[16]).intl;
    return intl3.string(require(dependencyMap[16]).t.wR5wOo);
  } else if (require(dependencyMap[14]).CollectiblesItemType.NAMEPLATE === type) {
    const intl2 = require(dependencyMap[16]).intl;
    return intl2.string(require(dependencyMap[16]).t.x5CoXR);
  } else if (require(dependencyMap[14]).CollectiblesItemType.PROFILE_FRAME === type) {
    const intl = require(dependencyMap[16]).intl;
    return intl.string(require(dependencyMap[16]).t.GWrZOd);
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
  const items = [...closure_27(stateFromStores), ...closure_28(first)];
  return require(dependencyMap[15]).uniqBy(items, "skuId");
};
export { getNameplatesFromPurchases };
export { getNameplatesFromCategories };
export const getNameplates = function getNameplates(stateFromStores, first) {
  const items = [...closure_29(stateFromStores), ...closure_30(first)];
  return require(dependencyMap[15]).uniqBy(items, "skuId");
};
export { getProfileEffectsFromPurchases };
export { getProfileEffectsFromCategories };
export const getProfileEffects = function getProfileEffects(stateFromStores, first) {
  const items = [...closure_31(stateFromStores), ...closure_32(first)];
  return require(dependencyMap[15]).uniqBy(items, "skuId");
};
export const groupProfileEffects = function groupProfileEffects(categories, arr) {
  const tmp = getProfileEffectsFromPurchases(arr);
  const require = tmp;
  arr = getProfileEffectsFromCategories(categories);
  return { purchased: tmp, shopPreviews: getProfileEffectsFromCategories(categories).filter((skuId) => !skuId.skuId.some((skuId) => skuId.skuId === skuId)) };
};
export { getProfileFramesFromPurchases };
export { getProfileFramesFromCategories };
export const getProfileFrames = function getProfileFrames(stateFromStores, first) {
  const items = [...closure_33(stateFromStores), ...closure_34(first)];
  return require(dependencyMap[15]).uniqBy(items, "skuId");
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
    if (type.type === require(dependencyMap[14]).CollectiblesItemType.BUNDLE) {
      type = require(dependencyMap[14]).CollectiblesItemType.BUNDLE;
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
export const getStrikeThroughPriceAmountForCollectiblesProduct = function getStrikeThroughPriceAmountForCollectiblesProduct(stateFromStores, canUseCollectiblesResult, arg2) {
  if (isBundleProduct(stateFromStores)) {
    return getBundleItemsPriceSum(stateFromStores);
  } else if (!canUseCollectiblesResult) {
    const tmpResult = tmp(stateFromStores, arg2 ? tmp2.MOBILE_PREMIUM_TIER_2 : tmp2.PREMIUM_TIER_2);
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
  if (require(dependencyMap[14]).CollectiblesItemType.AVATAR_DECORATION === arg0) {
    return "avatar decoration";
  } else if (require(dependencyMap[14]).CollectiblesItemType.PROFILE_EFFECT === arg0) {
    return "profile effect";
  } else if (require(dependencyMap[14]).CollectiblesItemType.NAMEPLATE === arg0) {
    return "nameplate";
  } else if (require(dependencyMap[14]).CollectiblesItemType.PROFILE_FRAME === arg0) {
    return "profile frame";
  } else if (require(dependencyMap[14]).CollectiblesItemType.BUNDLE === arg0) {
    return "bundle";
  } else if (require(dependencyMap[14]).CollectiblesItemType.EXTERNAL_SKU === arg0) {
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
  } else if (require(dependencyMap[14]).CollectiblesItemType.VARIANTS_GROUP === arg0) {
    return "variants group";
  } else {
    return "unknown";
  }
};
export const sortProductsByPrice = function sortProductsByPrice(arr) {
  const require = arg1;
  const importDefault = arg2;
  return arr.sort((product, product2) => {
    if (arg2) {
      let obj = product2(closure_2[17]);
      obj = { product, hasShopDiscount: product2 };
      let productOrbPrice = obj.getProductOrbPrice(obj);
    } else {
      productOrbPrice = callback(product, product2, true);
    }
    if (arg2) {
      obj = { product: product2, hasShopDiscount: product2 };
      let productOrbPrice1 = product2(closure_2[17]).getProductOrbPrice(obj);
      const obj3 = product2(closure_2[17]);
    } else {
      productOrbPrice1 = callback(product2, product2, true);
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
          someResult = eligibleOffers.some((arg0) => closure_0.includes(arg0));
        }
        eligibleOffers2 = eligibleOffers2.eligibleOffers;
        let someResult1;
        if (null != eligibleOffers2) {
          someResult1 = eligibleOffers2.some((arg0) => closure_0.includes(arg0));
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
