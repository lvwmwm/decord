// Module ID: 8709
// Function ID: 68814
// Name: getProductNameAndTypeFromSku
// Dependencies: [1876, 1212, 6786, 8710, 2]
// Exports: getProductNameAndTypeFromSku, isWishlistableCollectiblesProduct

// Module 8709 (getProductNameAndTypeFromSku)
const result = require("getPriceForCollectiblesProduct").fileFinishedImporting("modules/wishlists/CollectiblesWishlistUtils.tsx");

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
  if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let obj = { product: name };
    let formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.lvBzLi, obj);
  } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { product: name };
    formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.eR7moP, obj);
  } else {
    formatToPlainStringResult = name;
    if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE === type) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      obj = { product: name };
      formatToPlainStringResult = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.YFOwHj, obj);
    }
  }
  return formatToPlainStringResult;
};
export const isWishlistableCollectiblesProduct = function isWishlistableCollectiblesProduct(selectedProduct) {
  let tmp = !require(6786) /* getPriceForCollectiblesProduct */.isPremiumCollectiblesProduct(selectedProduct);
  if (tmp) {
    let tmp4 = selectedProduct.type !== require(1876) /* CollectiblesItemType */.CollectiblesItemType.EXTERNAL_SKU;
    if (tmp4) {
      let tmp7 = selectedProduct.type === require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
      if (tmp7) {
        tmp7 = !require(8710) /* apexExperiment */.getIsProfileFrameGiftingEnabled("isWishlistableCollectiblesProduct");
        const obj2 = require(8710) /* apexExperiment */;
      }
      tmp4 = !tmp7;
    }
    tmp = tmp4;
  }
  return tmp;
};
