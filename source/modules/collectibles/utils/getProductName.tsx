// Module ID: 8770
// Function ID: 69303
// Name: getProductName
// Dependencies: [1212, 6785, 1876, 2]
// Exports: getProductNameAndTypeLabel, getPurchasedProductName

// Module 8770 (getProductName)
function getProductName(product) {
  if (null == product) {
    return "";
  } else {
    const string = require(1212) /* getSystemLocale */.intl.string;
    if ("baseVariantName" in product) {
      if (null != product.baseVariantName) {
        if (product.variantLabel !== tmp5) {
          const intl = require(1212) /* getSystemLocale */.intl;
          const obj = {};
          ({ baseVariantName: obj.baseVariantName, variantLabel: obj.variantLabel } = product);
          let name = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.BZN5k2, obj);
        }
        return name;
      }
    }
    name = product.name;
  }
}
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/utils/getProductName.tsx");

export { getProductName };
export const getPurchasedProductName = function getPurchasedProductName(baseVariantName) {
  if (null == baseVariantName) {
    return "";
  } else {
    const string = require(1212) /* getSystemLocale */.intl.string;
    if (null != baseVariantName.baseVariantName) {
      if (baseVariantName.variantLabel !== tmp5) {
        const intl = require(1212) /* getSystemLocale */.intl;
        const obj = {};
        ({ baseVariantName: obj.baseVariantName, variantLabel: obj.variantLabel } = baseVariantName);
        let name = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.BZN5k2, obj);
      }
      return name;
    }
    name = baseVariantName.name;
  }
};
export const getProductNameAndTypeLabel = function getProductNameAndTypeLabel(closure_0) {
  const tmp = getProductName(closure_0);
  let obj = require(6785) /* getProductOrbPrice */;
  const productType = obj.getProductType(closure_0);
  if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION === productType) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj = { product: tmp };
    return intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.lvBzLi, obj);
  } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT === productType) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj = { product: tmp };
    return intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.eR7moP, obj);
  } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE === productType) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj1 = { product: tmp };
    return intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.YFOwHj, obj1);
  } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME === productType) {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj2 = { product: tmp };
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.vov8LX, obj2);
  } else {
    return tmp;
  }
};
