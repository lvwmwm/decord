// Module ID: 8972
// Function ID: 8973
// Name: CollectiblesWishlistUtils
// Dependencies: [1993, 1126, 7275, 2]
// Exports: getProductNameAndTypeFromSku, isWishlistableCollectiblesProduct

// Module 8972 (CollectiblesWishlistUtils)
import CollectiblesItemType from "CollectiblesItemType" /* 1993 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7275 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/wishlists/CollectiblesWishlistUtils.tsx");

export const getProductNameAndTypeFromSku = function getProductNameAndTypeFromSku(sku) {
  let formatToPlainStringResult;
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
  if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl2 = tmp2(1126).intl;
    const obj2 = { product: name };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(1126).t.lvBzLi, obj2);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl = tmp2(1126).intl;
    const obj = { product: name };
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1126).t.eR7moP, obj);
  } else {
    formatToPlainStringResult = name;
    if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
      const intl3 = tmp2(1126).intl;
      const obj3 = { product: name };
      formatToPlainStringResult = intl3.formatToPlainString(tmp2(1126).t.YFOwHj, obj3);
    }
  }
  return formatToPlainStringResult;
};
export const isWishlistableCollectiblesProduct = function isWishlistableCollectiblesProduct(selectedProduct) {
  const obj = CollectiblesUtils;
  const result = obj.isPremiumCollectiblesProduct(selectedProduct);
  let tmp4 = !result;
  if (tmp4) {
    tmp4 = selectedProduct.type !== CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
  }
  return tmp4;
};
