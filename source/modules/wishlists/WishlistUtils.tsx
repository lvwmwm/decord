// Module ID: 11983
// Function ID: 92616
// Name: createNitroSuggestedSku
// Dependencies: []
// Exports: buildReorderedNitroFirstWishlistItems, buildReorderedWishlistData, createNitroSuggestedSku, isEligibleWishlistItemOnMobile

// Module 11983 (createNitroSuggestedSku)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).isCollectiblesWishlistItemRecord;
let closure_6 = arg1(dependencyMap[3]).isPremiumWishlistItemRecord;
const isSKUWishlistItemRecord = arg1(dependencyMap[4]).isSKUWishlistItemRecord;
const SKUProductLines = arg1(dependencyMap[5]).SKUProductLines;
const PremiumSubscriptionSKUs = arg1(dependencyMap[6]).PremiumSubscriptionSKUs;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/wishlists/WishlistUtils.tsx");

export const createNitroSuggestedSku = function createNitroSuggestedSku() {
  const obj = { id: PremiumSubscriptionSKUs.TIER_2, productLine: SKUProductLines.PREMIUM };
  const intl = arg1(dependencyMap[7]).intl;
  obj.name = intl.string(arg1(dependencyMap[7]).t.lG6a5x);
  obj.features = new Set();
  const set = new Set();
  obj.genres = new Set();
  obj.manifests = [];
  obj.availableRegions = [];
  obj.locales = [];
  obj.bundledSkuIds = [];
  obj.selectedOptions = [];
  obj.eligibleOffers = [];
  obj.prices = {};
  const set1 = new Set();
  return new closure_4(obj);
};
export const isEligibleWishlistItemOnMobile = function isEligibleWishlistItemOnMobile(sku, isWishlistOwner) {
  isWishlistOwner = isWishlistOwner.isWishlistOwner;
  if (isSKUWishlistItemRecord(sku)) {
    if (sku.sku.productLine === SKUProductLines.SOCIAL_LAYER_GAME_ITEM) {
      let tmp5 = !tmp4;
      if (!!isWishlistOwner.isSocialLayerStorefrontMobilePurchasingEnabled) {
        if (!isWishlistOwner) {
          isWishlistOwner = isWishlistOwner(dependencyMap[8]).isSlayerSkuAvailableOnThisPlatform(sku.sku);
          const obj = isWishlistOwner(dependencyMap[8]);
        }
        tmp5 = isWishlistOwner;
      }
      let tmp2 = tmp5;
    }
    return tmp2;
  }
  tmp2 = callback2(sku);
  if (!tmp2) {
    tmp2 = callback3(sku);
  }
};
export const buildReorderedWishlistData = function buildReorderedWishlistData(set) {
  if (arg2 < arg3) {
    let skuId;
    if (null != arg1[arg3]) {
      skuId = tmp8.skuId;
    }
    let tmp11 = null;
    if (null != skuId) {
      tmp11 = skuId;
    }
    let skuId1;
    if (null != arg1[arg3 + 1]) {
      skuId1 = tmp12.skuId;
    }
    let tmp14 = null;
    if (null != skuId1) {
      tmp14 = skuId1;
    }
    let tmp7 = tmp14;
    let tmp4 = tmp11;
  } else {
    let skuId2;
    if (null != arg1[arg3 - 1]) {
      skuId2 = tmp.skuId;
    }
    tmp4 = null;
    if (null != skuId2) {
      tmp4 = skuId2;
    }
    let skuId3;
    if (null != arg1[arg3]) {
      skuId3 = tmp5.skuId;
    }
    tmp7 = null;
    if (null != skuId3) {
      tmp7 = skuId3;
    }
  }
  const items = [...arg1];
  items.splice(arg3, 0, callback(items.splice(arg2, 1), 1)[0]);
  const obj = { newWishlistData: set.set("items", items), previousSkuId: tmp4, nextSkuId: tmp7 };
  return obj;
};
export const buildReorderedNitroFirstWishlistItems = function buildReorderedNitroFirstWishlistItems(arr) {
  const findIndexResult = arr.findIndex((skuId) => callback(closure_2[9]).isPremiumSku(skuId.skuId));
  if (findIndexResult <= 0) {
    return arr;
  } else {
    const items = [];
    HermesBuiltin.arraySpread(arr, 0);
    const items1 = [callback(items.splice(findIndexResult, 1), 1)[0]];
    HermesBuiltin.arraySpread(items, 1);
    return items1;
  }
};
