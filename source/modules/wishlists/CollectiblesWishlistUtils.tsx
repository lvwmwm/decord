// Module ID: 8660
// Function ID: 68542
// Name: getProductNameAndTypeFromSku
// Dependencies: []
// Exports: getProductNameAndTypeFromSku, isWishlistableCollectiblesProduct

// Module 8660 (getProductNameAndTypeFromSku)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/wishlists/CollectiblesWishlistUtils.tsx");

export const getProductNameAndTypeFromSku = function getProductNameAndTypeFromSku(sku) {
  let name;
  let tenantMetadata;
  ({ name, tenantMetadata } = sku);
  let type;
  if (null != tenantMetadata) {
    const collectibles = tenantMetadata.collectibles;
    if (null != collectibles) {
      type = collectibles.type;
    }
  }
  if (require(dependencyMap[0]).CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl2 = require(dependencyMap[1]).intl;
    let obj = { product: name };
    let formatToPlainStringResult = intl2.formatToPlainString(require(dependencyMap[1]).t.lvBzLi, obj);
  } else if (require(dependencyMap[0]).CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl = require(dependencyMap[1]).intl;
    obj = { product: name };
    formatToPlainStringResult = intl.formatToPlainString(require(dependencyMap[1]).t.eR7moP, obj);
  } else {
    formatToPlainStringResult = name;
    if (require(dependencyMap[0]).CollectiblesItemType.NAMEPLATE === type) {
      const intl3 = require(dependencyMap[1]).intl;
      obj = { product: name };
      formatToPlainStringResult = intl3.formatToPlainString(require(dependencyMap[1]).t.YFOwHj, obj);
    }
  }
  return formatToPlainStringResult;
};
export const isWishlistableCollectiblesProduct = function isWishlistableCollectiblesProduct(selectedProduct) {
  let tmp = !require(dependencyMap[2]).isPremiumCollectiblesProduct(selectedProduct);
  if (tmp) {
    let tmp4 = selectedProduct.type !== require(dependencyMap[0]).CollectiblesItemType.EXTERNAL_SKU;
    if (tmp4) {
      let tmp7 = selectedProduct.type === require(dependencyMap[0]).CollectiblesItemType.PROFILE_FRAME;
      if (tmp7) {
        tmp7 = !require(dependencyMap[3]).getIsProfileFrameGiftingEnabled("isWishlistableCollectiblesProduct");
        const obj2 = require(dependencyMap[3]);
      }
      tmp4 = !tmp7;
    }
    tmp = tmp4;
  }
  return tmp;
};
