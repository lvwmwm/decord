// Module ID: 8724
// Function ID: 69047
// Name: getProductName
// Dependencies: []
// Exports: getProductNameAndTypeLabel, getPurchasedProductName

// Module 8724 (getProductName)
function getProductName(product) {
  if (null == product) {
    return "";
  } else {
    const string = require(dependencyMap[0]).intl.string;
    if ("baseVariantName" in product) {
      if (null != product.baseVariantName) {
        if (product.variantLabel !== tmp5) {
          const intl = require(dependencyMap[0]).intl;
          const obj = {};
          ({ baseVariantName: obj.baseVariantName, variantLabel: obj.variantLabel } = product);
          let name = intl.formatToPlainString(require(dependencyMap[0]).t.BZN5k2, obj);
        }
        return name;
      }
    }
    name = product.name;
  }
}
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/collectibles/utils/getProductName.tsx");

export { getProductName };
export const getPurchasedProductName = function getPurchasedProductName(baseVariantName) {
  if (null == baseVariantName) {
    return "";
  } else {
    const string = require(dependencyMap[0]).intl.string;
    if (null != baseVariantName.baseVariantName) {
      if (baseVariantName.variantLabel !== tmp5) {
        const intl = require(dependencyMap[0]).intl;
        const obj = {};
        ({ baseVariantName: obj.baseVariantName, variantLabel: obj.variantLabel } = baseVariantName);
        let name = intl.formatToPlainString(require(dependencyMap[0]).t.BZN5k2, obj);
      }
      return name;
    }
    name = baseVariantName.name;
  }
};
export const getProductNameAndTypeLabel = function getProductNameAndTypeLabel(product) {
  const tmp = getProductName(product);
  let obj = require(dependencyMap[1]);
  const productType = obj.getProductType(product);
  if (require(dependencyMap[2]).CollectiblesItemType.AVATAR_DECORATION === productType) {
    const intl4 = require(dependencyMap[0]).intl;
    obj = { product: tmp };
    return intl4.formatToPlainString(require(dependencyMap[0]).t.lvBzLi, obj);
  } else if (require(dependencyMap[2]).CollectiblesItemType.PROFILE_EFFECT === productType) {
    const intl3 = require(dependencyMap[0]).intl;
    obj = { product: tmp };
    return intl3.formatToPlainString(require(dependencyMap[0]).t.eR7moP, obj);
  } else if (require(dependencyMap[2]).CollectiblesItemType.NAMEPLATE === productType) {
    const intl2 = require(dependencyMap[0]).intl;
    const obj1 = { product: tmp };
    return intl2.formatToPlainString(require(dependencyMap[0]).t.YFOwHj, obj1);
  } else if (require(dependencyMap[2]).CollectiblesItemType.PROFILE_FRAME === productType) {
    const intl = require(dependencyMap[0]).intl;
    const obj2 = { product: tmp };
    return intl.formatToPlainString(require(dependencyMap[0]).t.vov8LX, obj2);
  } else {
    return tmp;
  }
};
