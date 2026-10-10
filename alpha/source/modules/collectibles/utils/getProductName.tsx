// Module ID: 9077
// Function ID: 9078
// Name: getProductName
// Dependencies: [1993, 1126, 7274, 2]
// Exports: getCardProductName, getProductName, getProductNameAndTypeLabel, getPurchasedProductName

// Module 9077 (getProductName)
import intl6 from "intl" /* 1126 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1993 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7274 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/utils/getProductName.tsx");

export const getCardProductName = function getCardProductName(product) {
  let str = "";
  if (null != product) {
    const string = intl6.intl.string;
    if ("baseVariantName" in product) {
      if (null != product.baseVariantName) {
        let name;
        if (product.variantLabel !== tmp3) {
          const intl = tmp(1126).intl;
          const obj = { baseVariantName: null, variantLabel: null };
          ({ baseVariantName: obj.baseVariantName, variantLabel: obj.variantLabel } = product);
          name = intl.formatToPlainString(tmp(1126).t.BZN5k2, obj);
        }
        str = name;
      }
    }
    name = product.name;
  }
  let formatResult = str;
  if (null != product) {
    formatResult = str;
    if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
      formatResult = str;
      if (product.items.length > 0) {
        const intl2 = tmp5(1126).intl;
        const obj2 = { count: product.items.length, productName: str };
        formatResult = intl2.format(tmp5(1126).t.UTc0ny, obj2);
      }
    }
  }
  return formatResult;
};
export const getProductName = function getProductName(product) {
  if (null == product) {
    return "";
  } else {
    const string = intl6.intl.string;
    if ("baseVariantName" in product) {
      if (null != product.baseVariantName) {
        let name;
        if (product.variantLabel !== tmp3) {
          const intl = tmp(1126).intl;
          const obj = { baseVariantName: null, variantLabel: null };
          ({ baseVariantName: obj.baseVariantName, variantLabel: obj.variantLabel } = product);
          name = intl.formatToPlainString(tmp(1126).t.BZN5k2, obj);
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
    const string = intl6.intl.string;
    if (null != baseVariantName.baseVariantName) {
      let name;
      if (baseVariantName.variantLabel !== tmp3) {
        const intl = tmp(1126).intl;
        const obj = { baseVariantName: null, variantLabel: null };
        ({ baseVariantName: obj.baseVariantName, variantLabel: obj.variantLabel } = baseVariantName);
        name = intl.formatToPlainString(tmp(1126).t.BZN5k2, obj);
      }
      return name;
    }
    name = baseVariantName.name;
  }
};
export const getProductNameAndTypeLabel = function getProductNameAndTypeLabel(product) {
  let str = "";
  if (null != product) {
    const string = intl6.intl.string;
    if ("baseVariantName" in product) {
      if (null != product.baseVariantName) {
        let name;
        if (product.variantLabel !== tmp3) {
          const intl = tmp(1126).intl;
          const obj = { baseVariantName: null, variantLabel: null };
          ({ baseVariantName: obj.baseVariantName, variantLabel: obj.variantLabel } = product);
          name = intl.formatToPlainString(tmp(1126).t.BZN5k2, obj);
        }
        str = name;
      }
    }
    name = product.name;
  }
  const obj2 = CollectiblesProductUtils;
  const productType = obj2.getProductType(product);
  if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === productType) {
    const intl5 = tmp4(1126).intl;
    const obj3 = { product: str };
    return intl5.formatToPlainString(intl6.t.lvBzLi, obj3);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === productType) {
    const intl4 = tmp4(1126).intl;
    const obj4 = { product: str };
    return intl4.formatToPlainString(intl6.t.eR7moP, obj4);
  } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === productType) {
    const intl3 = tmp4(1126).intl;
    const obj5 = { product: str };
    return intl3.formatToPlainString(intl6.t.YFOwHj, obj5);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === productType) {
    const intl2 = tmp4(1126).intl;
    const obj6 = { product: str };
    return intl2.formatToPlainString(intl6.t.vov8LX, obj6);
  } else {
    return str;
  }
};
