// Module ID: 9178
// Function ID: 9179
// Name: getProductNameAndTypeFromSku
// Dependencies: [1949, 1236, 5313, 2]
// Exports: getProductNameAndTypeFromSku, isWishlistableCollectiblesProduct

// Module 9178 (getProductNameAndTypeFromSku)
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
  const result = require(5313) /* getItemRecordsFromPurchases */.isPremiumCollectiblesProduct(selectedProduct);
  let tmp4 = !result;
  if (!result) {
    tmp4 = selectedProduct.type !== require(1949) /* CollectiblesItemType */.CollectiblesItemType.EXTERNAL_SKU;
  }
  return tmp4;
};
