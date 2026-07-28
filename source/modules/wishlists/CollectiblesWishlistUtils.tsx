// Module ID: 8641
// Function ID: 68437
// Name: getProductNameAndTypeFromSku
// Dependencies: [1877, 1212, 5792, 8642, 2]
// Exports: getProductNameAndTypeFromSku, isWishlistableCollectiblesProduct

// Module 8641 (getProductNameAndTypeFromSku)
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
  if (require(1877) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let obj = { product: name };
    let formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.lvBzLi, obj);
  } else if (require(1877) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { product: name };
    formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.eR7moP, obj);
  } else {
    formatToPlainStringResult = name;
    if (require(1877) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE === type) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      obj = { product: name };
      formatToPlainStringResult = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.YFOwHj, obj);
    }
  }
  return formatToPlainStringResult;
};
export const isWishlistableCollectiblesProduct = function isWishlistableCollectiblesProduct(selectedProduct) {
  let tmp = !require(5792) /* getPriceForCollectiblesProduct */.isPremiumCollectiblesProduct(selectedProduct);
  if (tmp) {
    let tmp4 = selectedProduct.type !== require(1877) /* CollectiblesItemType */.CollectiblesItemType.EXTERNAL_SKU;
    if (tmp4) {
      let tmp7 = selectedProduct.type === require(1877) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
      if (tmp7) {
        tmp7 = !require(8642) /* apexExperiment */.getIsProfileFrameGiftingEnabled("isWishlistableCollectiblesProduct");
        const obj2 = require(8642) /* apexExperiment */;
      }
      tmp4 = !tmp7;
    }
    tmp = tmp4;
  }
  return tmp;
};
