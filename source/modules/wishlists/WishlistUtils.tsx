// Module ID: 12132
// Function ID: 95078
// Name: createNitroSuggestedSku
// Dependencies: [57, 4169, 8721, 8722, 8723, 653, 1851, 1212, 5613, 3776, 2]
// Exports: buildReorderedNitroFirstWishlistItems, buildReorderedWishlistData, createNitroSuggestedSku, isEligibleWishlistItemOnMobile

// Module 12132 (createNitroSuggestedSku)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { isCollectiblesWishlistItemRecord as closure_5 } from "_createForOfIteratorHelperLoose";
import { isPremiumWishlistItemRecord as closure_6 } from "_isNativeReflectConstruct";
import { isSKUWishlistItemRecord } from "_isNativeReflectConstruct";
import { SKUProductLines } from "ME";
import { PremiumSubscriptionSKUs } from "GuildFeatures";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/wishlists/WishlistUtils.tsx");

export const createNitroSuggestedSku = function createNitroSuggestedSku() {
  const obj = { id: PremiumSubscriptionSKUs.TIER_2, productLine: SKUProductLines.PREMIUM };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.name = intl.string(require(1212) /* getSystemLocale */.t.lG6a5x);
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
  return new _isNativeReflectConstruct(obj);
};
export const isEligibleWishlistItemOnMobile = function isEligibleWishlistItemOnMobile(sku, isWishlistOwner) {
  isWishlistOwner = isWishlistOwner.isWishlistOwner;
  if (isSKUWishlistItemRecord(sku)) {
    if (sku.sku.productLine === SKUProductLines.SOCIAL_LAYER_GAME_ITEM) {
      let tmp5 = !tmp4;
      if (!!isWishlistOwner.isSocialLayerStorefrontMobilePurchasingEnabled) {
        if (!isWishlistOwner) {
          isWishlistOwner = require(5613) /* transformStorefrontSKUPricesServer */.isSlayerSkuAvailableOnThisPlatform(sku.sku);
          const obj = require(5613) /* transformStorefrontSKUPricesServer */;
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
  const findIndexResult = arr.findIndex((skuId) => outer1_1(outer1_2[9]).isPremiumSku(skuId.skuId));
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
