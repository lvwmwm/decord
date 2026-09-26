// Module ID: 8231
// Function ID: 8232
// Name: CollectiblesWishlistUtils
// Dependencies: [1974, 1115, 6974, 2]
// Exports: getProductNameAndTypeFromSku, isWishlistableCollectiblesProduct

// Module 8231 (CollectiblesWishlistUtils)
import CollectiblesItemType from "CollectiblesItemType" /* 1974 */;
import CollectiblesUtils from "CollectiblesUtils" /* 6974 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/wishlists/CollectiblesWishlistUtils.tsx");

export const getProductNameAndTypeFromSku = function getProductNameAndTypeFromSku(sku) {
  ({ name, tenantMetadata } = sku);
  let type;
  if (tenantMetadata != null) {
    const collectibles = tenantMetadata.collectibles;
    if (collectibles != null) {
      type = collectibles.type;
    }
  }
  if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl2 = tmp2(1115).intl;
    const obj2 = { product: name };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp2(1115).t.lvBzLi, obj2);
  } else if (tmp2(1974).CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl = tmp2(1115).intl;
    const obj = { product: name };
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1115).t.eR7moP, obj);
  } else {
    formatToPlainStringResult = name;
    if (tmp2(1974).CollectiblesItemType.NAMEPLATE === type) {
      const intl3 = tmp2(1115).intl;
      const obj3 = { product: name };
      formatToPlainStringResult = intl3.formatToPlainString(tmp2(1115).t.YFOwHj, obj3);
    }
  }
  return formatToPlainStringResult;
};
export const isWishlistableCollectiblesProduct = function isWishlistableCollectiblesProduct(selectedProduct) {
  const result = CollectiblesUtils.isPremiumCollectiblesProduct(selectedProduct);
  let tmp4 = !result;
  if (!result) {
    tmp4 = selectedProduct.type !== CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
  }
  return tmp4;
};
