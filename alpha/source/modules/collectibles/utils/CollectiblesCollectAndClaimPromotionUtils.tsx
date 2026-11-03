// Module ID: 15169
// Function ID: 15170
// Name: CollectiblesCollectAndClaimPromotionUtils
// Dependencies: [9713, 9611, 7844, 1074, 7856, 2]
// Exports: getBundleChildSkuIds, getCollectAndClaimPromotionForCollectiblesProduct, getCollectiblesPromotionSurface

// Module 15169 (CollectiblesCollectAndClaimPromotionUtils)
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7856 */;
import StorefrontPromotionRecord from "StorefrontPromotionRecord" /* 9611 */;
import StorefrontCollectionStore from "StorefrontCollectionStore" /* 9713 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7844 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

const f107879 = (skuId) => skuId.skuId;
function getCollectionQualifyingSkuCount(bundledProducts, collectionId) {
  let _Set1;
  _require = collectionId;
  const obj = require("CollectiblesUtils");
  const tmp = _require;
  const tmp2 = _Set1;
  if (obj.isBundleProduct(bundledProducts)) {
    let items1;
    const _Set = Set;
    const collection = StorefrontCollectionStore.getCollection(collectionId);
    let flatMapResult;
    if (collection != null) {
      const products = collection.products;
      flatMapResult = products.flatMap((skuIds) => skuIds.skuIds);
    }
    if (flatMapResult == null) {
      flatMapResult = [];
    }
    const self = this;
    const self2 = this;
    _Set1 = new _Set(flatMapResult);
    const tmpResult = tmp(tmp2[4]);
    if (tmpResult.isBundleProduct(bundledProducts)) {
      bundledProducts = bundledProducts.bundledProducts;
      if (bundledProducts == null) {
        bundledProducts = bundledProducts.items;
      }
      const _Set2 = Set;
      const self3 = this;
      const self4 = this;
      const items = [];
      set = new Set(bundledProducts.map(f107879));
      HermesBuiltin.arraySpread(items, set, 0);
      items1 = items;
    } else {
      items1 = [];
    }
    return items1.filter((item) => {
      const product = CollectiblesCategoryStore.getProduct(item);
      let categorySkuId;
      if (product != null) {
        categorySkuId = product.categorySkuId;
      }
      const hasItem = categorySkuId === collectionId || _Set1.has(item);
      return hasItem;
    }).length;
  } else {
    let num = 0;
    if (bundledProducts.categorySkuId === collectionId) {
      num = 1;
    }
    return num;
  }
}
let closure_3 = StorefrontPromotionRecord.getCollectiblesCollectAndClaim;
const CollectibleShopTab = CollectiblesShopConstants.CollectibleShopTab;
const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesCollectAndClaimPromotionUtils.tsx");

export function getCollectAndClaimPromotionForCollectiblesProduct(selectedProduct, rewardStatus) {
  const tmp = closure_3(rewardStatus);
  let tmp2 = null;
  if (null != rewardStatus.rewardStatus) {
    tmp2 = null;
    if (null != tmp) {
      tmp2 = null;
      if (0 !== getCollectionQualifyingSkuCount(selectedProduct, tmp.collectionId)) {
        tmp2 = rewardStatus;
      }
    }
  }
  return tmp2;
}
export function getBundleChildSkuIds(bundledProducts) {
  const obj = CollectiblesUtils;
  if (obj.isBundleProduct(bundledProducts)) {
    bundledProducts = bundledProducts.bundledProducts;
    if (bundledProducts == null) {
      bundledProducts = bundledProducts.items;
    }
    const _Set = Set;
    const self = this;
    const self2 = this;
    const items = [];
    set = new Set(bundledProducts.map(f107879));
    HermesBuiltin.arraySpread(items, set, 0);
    return items;
  } else {
    return [];
  }
}
export { getCollectionQualifyingSkuCount };
export function getCollectiblesPromotionSurface(shopHome, arg1) {
  if (CollectibleShopTab.HOME === arg1) {
    return shopHome.shopHome;
  } else {
    return tmp.COLLECTION_INDEX === arg1 ? shopHome.indexPage : undefined;
  }
}
