// Module ID: 14356
// Function ID: 14357
// Name: WishlistUtils
// Dependencies: [32, 2047, 9349, 9350, 9351, 1087, 1394, 1128, 7320, 2]
// Exports: buildReorderedWishlistData, createNitroSuggestedSku, isEligibleWishlistItemOnMobile

// Module 14356 (WishlistUtils)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import PremiumConstants from "PremiumConstants" /* 1394 */;
import StorefrontUtils from "StorefrontUtils" /* 7320 */;
import CollectiblesWishlistItemRecord from "CollectiblesWishlistItemRecord" /* 9349 */;
import PremiumWishlistItemRecord from "PremiumWishlistItemRecord" /* 9350 */;
import SKUWishlistItemRecord from "SKUWishlistItemRecord" /* 9351 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import SKURecord from "SKURecord" /* 2047 */;
import size from "module_2" /* 2 */;

let closure_4 = CollectiblesWishlistItemRecord.isCollectiblesWishlistItemRecord;
let closure_5 = PremiumWishlistItemRecord.isPremiumWishlistItemRecord;
const isSKUWishlistItemRecord = SKUWishlistItemRecord.isSKUWishlistItemRecord;
const SKUProductLines = Constants.SKUProductLines;
const PremiumSubscriptionSKUs = PremiumConstants.PremiumSubscriptionSKUs;
const result = size.fileFinishedImporting("modules/wishlists/WishlistUtils.tsx");

export const createNitroSuggestedSku = function createNitroSuggestedSku() {
  let intl;
  const obj = { id: PremiumSubscriptionSKUs.TIER_2, productLine: SKUProductLines.PREMIUM, name: intl.string(intl2.t.lG6a5x), features: new Set(), genres: new Set(), manifests: [], availableRegions: [], locales: [], bundledSkuIds: [], selectedOptions: [], eligibleOffers: [], prices: {} };
  intl = intl2.intl;
  new Set();
  new Set();
  const tmp3 = new SKURecord(obj);
  return tmp3;
};
export const isEligibleWishlistItemOnMobile = function isEligibleWishlistItemOnMobile(sku, isWishlistOwner) {
  isWishlistOwner = isWishlistOwner.isWishlistOwner;
  if (isSKUWishlistItemRecord(sku)) {
    let tmp2;
    if (sku.sku.productLine === SKUProductLines.SOCIAL_LAYER_GAME_ITEM) {
      if (!isWishlistOwner) {
        const obj = StorefrontUtils;
        isWishlistOwner = obj.isSlayerSkuAvailableOnThisPlatform(sku.sku);
      }
      tmp2 = isWishlistOwner;
    }
    return tmp2;
  }
  tmp2 = closure_4(sku) || closure_5(sku);
};
export const buildReorderedWishlistData = function buildReorderedWishlistData(set, arg1, arg2, arg3) {
  let skuId2;
  let skuId3;
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
    skuId3 = skuId1;
    skuId2 = skuId;
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
  items.splice(arg3, 0, _slicedToArray(items.splice(arg2, 1), 1)[0]);
  const obj = { newWishlistData: set.set("items", items), previousSkuId: skuId2, nextSkuId: skuId3 };
  return obj;
};
