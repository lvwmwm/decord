// Module ID: 9219
// Function ID: 9220
// Name: getProductName
// Dependencies: [1973, 1115, 7881, 2]
// Exports: getCardProductName, getProductName, getProductNameAndTypeLabel, getPurchasedProductName

// Module 9219 (getProductName)
import util from "util" /* 1115 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1973 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7881 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/utils/getProductName.tsx");

export const getCardProductName = function getCardProductName(product) {
  if (null == product) {
    let str2 = "";
    if (null != product) {
      str2 = "";
      if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
        str2 = "";
        if (product.items.length > 0) {
          const intl2 = tmp3(1115).intl;
          const obj2 = { count: product.items.length, productName: "" };
          str2 = intl2.format(tmp3(1115).t.UTc0ny, obj2);
        }
      }
    }
    return str2;
  } else {
    let BZN5k2 = require;
    let obj = dependencyMap;
    const string = util.intl.string;
    if ("baseVariantName" in product) {
      const intl = BZN5k2(1115).intl;
      BZN5k2 = BZN5k2(1115).t.BZN5k2;
      obj = { baseVariantName: null, variantLabel: null };
      ({ baseVariantName: obj.baseVariantName, variantLabel: obj.variantLabel } = product);
      let name = intl.formatToPlainString(BZN5k2, obj);
    }
    name = product.name;
  }
};
export const getProductName = function getProductName(product) {
  if (null == product) {
    return "";
  } else {
    const string = util.intl.string;
    if ("baseVariantName" in product) {
      if (null != product.baseVariantName) {
        if (product.variantLabel !== tmp3) {
          const intl = tmp(1115).intl;
          const obj = { baseVariantName: null, variantLabel: null };
          ({ baseVariantName: obj.baseVariantName, variantLabel: obj.variantLabel } = product);
          let name = intl.formatToPlainString(tmp(1115).t.BZN5k2, obj);
        }
        return name;
      }
    }
    name = product.name;
  }
};
export const getPurchasedProductName = function getPurchasedProductName(baseVariantName) {
  if (null == baseVariantName) {
    return "";
  } else {
    const string = util.intl.string;
    if (null != baseVariantName.baseVariantName) {
      if (baseVariantName.variantLabel !== tmp3) {
        const intl = tmp(1115).intl;
        const obj = { baseVariantName: null, variantLabel: null };
        ({ baseVariantName: obj.baseVariantName, variantLabel: obj.variantLabel } = baseVariantName);
        let name = intl.formatToPlainString(tmp(1115).t.BZN5k2, obj);
      }
      return name;
    }
    name = baseVariantName.name;
  }
};
export const getProductNameAndTypeLabel = function getProductNameAndTypeLabel(product) {
  if (null == product) {
    const productType = CollectiblesProductUtils.getProductType(product);
    if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === productType) {
      const intl5 = tmp3(1115).intl;
      const obj3 = { product: "" };
      return intl5.formatToPlainString(tmp3(1115).t.lvBzLi, obj3);
    } else if (tmp3(1973).CollectiblesItemType.PROFILE_EFFECT === productType) {
      const intl4 = tmp3(1115).intl;
      const obj4 = { product: "" };
      return intl4.formatToPlainString(tmp3(1115).t.eR7moP, obj4);
    } else if (tmp3(1973).CollectiblesItemType.NAMEPLATE === productType) {
      const intl3 = tmp3(1115).intl;
      const obj5 = { product: "" };
      return intl3.formatToPlainString(tmp3(1115).t.YFOwHj, obj5);
    } else if (tmp3(1973).CollectiblesItemType.PROFILE_FRAME === productType) {
      const intl2 = tmp3(1115).intl;
      const obj6 = { product: "" };
      return intl2.formatToPlainString(tmp3(1115).t.vov8LX, obj6);
    } else {
      return "";
    }
  } else {
    let BZN5k2 = require;
    let obj = dependencyMap;
    const string = util.intl.string;
    if ("baseVariantName" in product) {
      const intl = BZN5k2(1115).intl;
      BZN5k2 = BZN5k2(1115).t.BZN5k2;
      obj = { baseVariantName: null, variantLabel: null };
      ({ baseVariantName: obj.baseVariantName, variantLabel: obj.variantLabel } = product);
      let name = intl.formatToPlainString(BZN5k2, obj);
    }
    name = product.name;
  }
};
