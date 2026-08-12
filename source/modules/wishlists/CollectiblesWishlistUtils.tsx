// Module ID: 9396
// Function ID: 9397
// Name: getProductNameAndTypeFromSku
// Dependencies: [1949, 1236, 7055, 9397, 2]
// Exports: getProductNameAndTypeFromSku, isWishlistableCollectiblesProduct

// Module 9396 (getProductNameAndTypeFromSku)
let result = require("getItemRecordsFromPurchases").fileFinishedImporting("modules/wishlists/CollectiblesWishlistUtils.tsx");

export const getProductNameAndTypeFromSku = function getProductNameAndTypeFromSku(sku) {
  let name;
  let tenantMetadata;
  ({ name, tenantMetadata } = sku);
  let type;
  if (tenantMetadata != null) {
    const collectibles = tenantMetadata.collectibles;
    if (collectibles != null) {
      type = collectibles.type;
    }
  }
  if (require(1949) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl2 = tmp2(1236).intl;
    let obj = { product: null };
    obj[0] = name;
    let formatToPlainStringResult = intl2.formatToPlainString(tmp2(1236).t.lvBzLi, obj);
  } else if (tmp2(1949).CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl = tmp2(1236).intl;
    obj = { product: null };
    obj[0] = name;
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1236).t.eR7moP, obj);
  } else {
    formatToPlainStringResult = name;
    if (tmp2(1949).CollectiblesItemType.NAMEPLATE === type) {
      const intl3 = tmp2(1236).intl;
      obj = { product: null };
      obj[0] = name;
      formatToPlainStringResult = intl3.formatToPlainString(tmp2(1236).t.YFOwHj, obj);
    }
  }
  return formatToPlainStringResult;
};
export const isWishlistableCollectiblesProduct = function isWishlistableCollectiblesProduct(selectedProduct) {
  const result = require(7055) /* getItemRecordsFromPurchases */.isPremiumCollectiblesProduct(selectedProduct);
  let tmp4 = !result;
  if (!result) {
    let tmp5 = selectedProduct.type !== tmp(1949).CollectiblesItemType.EXTERNAL_SKU;
    if (tmp5) {
      let tmp6 = selectedProduct.type === tmp(1949).CollectiblesItemType.PROFILE_FRAME;
      if (tmp6) {
        tmp6 = !tmp(9397).getIsProfileFrameGiftingEnabled("isWishlistableCollectiblesProduct");
        const tmpResult = tmp(9397);
      }
      tmp5 = !tmp6;
    }
    tmp4 = tmp5;
  }
  return tmp4;
};
