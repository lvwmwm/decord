// Module ID: 12176
// Function ID: 12177
// Name: createNitroSuggestedSku
// Dependencies: [32, 4228, 8677, 8678, 8679, 676, 1876, 1236, 5666, 3835, 2]
// Exports: buildReorderedNitroFirstWishlistItems, buildReorderedWishlistData, createNitroSuggestedSku, isEligibleWishlistItemOnMobile

// Module 12176 (createNitroSuggestedSku)
import _slicedToArray from "_slicedToArray";
import createFromServer from "createFromServer";
import { isCollectiblesWishlistItemRecord as closure_5 } from "createCollectiblesItemFromServerResponse";
import { isPremiumWishlistItemRecord as closure_6 } from "fromServer";
import { isSKUWishlistItemRecord } from "fromServer";
import { SKUProductLines } from "ME";
import { PremiumSubscriptionSKUs } from "GuildFeatures";

const require = arg1;
const result = require("createCollectiblesItemFromServerResponse").fileFinishedImporting("modules/wishlists/WishlistUtils.tsx");

export const createNitroSuggestedSku = function createNitroSuggestedSku() {
  const obj = { id: PremiumSubscriptionSKUs.TIER_2, productLine: SKUProductLines.PREMIUM, name: null, features: null, genres: null, manifests: null, availableRegions: null, locales: null, bundledSkuIds: null, selectedOptions: null, eligibleOffers: null, prices: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.lG6a5x);
  obj[3] = new Set();
  const set = new Set();
  obj[4] = new Set();
  obj[5] = [];
  obj[6] = [];
  obj[7] = [];
  obj[8] = [];
  obj[9] = [];
  obj[10] = [];
  obj[11] = {};
  const set1 = new Set();
  return new createFromServer(obj);
};
export const isEligibleWishlistItemOnMobile = function isEligibleWishlistItemOnMobile(sku, isWishlistOwner) {
  isWishlistOwner = isWishlistOwner.isWishlistOwner;
  if (isSKUWishlistItemRecord(sku)) {
    if (sku.sku.productLine === SKUProductLines.SOCIAL_LAYER_GAME_ITEM) {
      let prop = isWishlistOwner.isSocialLayerStorefrontMobilePurchasingEnabled;
      if (prop) {
        if (!isWishlistOwner) {
          isWishlistOwner = require(5666) /* useSKUPrice */.isSlayerSkuAvailableOnThisPlatform(sku.sku);
          const obj = require(5666) /* useSKUPrice */;
        }
        prop = isWishlistOwner;
      }
      let tmp2 = prop;
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
    if (arg1[arg3] != null) {
      skuId = tmp6.skuId;
    }
    if (skuId == null) {
      skuId = null;
    }
    let skuId1;
    if (arg1[arg3 + 1] != null) {
      skuId1 = tmp9.skuId;
    }
    if (skuId1 == null) {
      skuId1 = null;
    }
    let skuId3 = skuId1;
    let skuId2 = skuId;
  } else {
    skuId2 = undefined;
    if (arg1[arg3 - 1] != null) {
      skuId2 = tmp.skuId;
    }
    if (skuId2 == null) {
      skuId2 = null;
    }
    skuId3 = undefined;
    if (arg1[arg3] != null) {
      skuId3 = tmp4.skuId;
    }
    if (skuId3 == null) {
      skuId3 = null;
    }
  }
  const items = [...arg1];
  items.splice(arg3, 0, callback(items.splice(arg2, 1), 1)[0]);
  return { newWishlistData: set.set("items", items), previousSkuId: skuId2, nextSkuId: skuId3 };
};
export const buildReorderedNitroFirstWishlistItems = function buildReorderedNitroFirstWishlistItems(arr) {
  const findIndexResult = arr.findIndex((skuId) => callback(table[9]).isPremiumSku(skuId.skuId));
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
