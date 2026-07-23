// Module ID: 6785
// Function ID: 53512
// Name: getProductOrbPrice
// Dependencies: [57, 6780, 653, 1876, 2]
// Exports: getProductSkuIds, getProductsWithOrbsPrice, getSelectedProduct, isDynamicProduct, isOrbsExclusiveProduct

// Module 6785 (getProductOrbPrice)
import _slicedToArray from "_slicedToArray";
import { isProfileEffectRecord } from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
function getProductOrbPrice(arg0) {
  const tmp2 = arg0.product.prices[arg0.hasShopDiscount ? closure_5.PREMIUM_TIER_2 : closure_5.DEFAULT];
  let substr;
  if (null != tmp2) {
    const countryPrices = tmp2.countryPrices;
    if (null != countryPrices) {
      const prices = countryPrices.prices;
      if (null != prices) {
        substr = prices.slice(0, 2);
      }
    }
  }
  if (null == substr) {
    substr = [];
  }
  const found = substr.find((currency) => currency.currency === outer1_4.DISCORD_ORB);
  let tmp4 = null;
  if (null != found) {
    tmp4 = found;
  }
  return tmp4;
}
function getProductFiatPrice(arg0) {
  const tmp2 = arg0.product.prices[arg0.hasShopDiscount ? closure_5.MOBILE_PREMIUM_TIER_2 : closure_5.MOBILE];
  let substr;
  if (null != tmp2) {
    const countryPrices = tmp2.countryPrices;
    if (null != countryPrices) {
      const prices = countryPrices.prices;
      if (null != prices) {
        substr = prices.slice(0, 2);
      }
    }
  }
  if (null == substr) {
    substr = [];
  }
  const found = substr.find((currency) => currency.currency !== outer1_4.DISCORD_ORB);
  let tmp4 = null;
  if (null != found) {
    tmp4 = found;
  }
  return tmp4;
}
function getHasOrbPrice(product) {
  return null != getProductOrbPrice({ product, hasShopDiscount: false });
}
function getHasNonOrbPrice(product) {
  return null != getProductFiatPrice({ product, hasShopDiscount: false });
}
function getIsVariantProduct(product) {
  let tmp = product.type === require(1876) /* CollectiblesItemType */.CollectiblesItemType.VARIANTS_GROUP;
  if (tmp) {
    tmp = null != product.variants;
  }
  if (tmp) {
    tmp = 0 !== product.variants.length;
  }
  return tmp;
}
function getProductType(product) {
  if (null == product) {
    return null;
  } else if (product.type === require(1876) /* CollectiblesItemType */.CollectiblesItemType.VARIANTS_GROUP) {
    if (null != product.variants) {
      if (0 !== product.variants.length) {
        const first = product.variants[0];
        let type = null;
        if (null != first) {
          type = callback(first.items, 1)[0].type;
        }
        return type;
      }
    }
    return null;
  } else {
    return product.type;
  }
}
({ CurrencyCodes: closure_4, PriceSetAssignmentPurchaseTypes: closure_5 } = ME);
const result = require("ME").fileFinishedImporting("modules/collectibles/utils/CollectiblesProductUtils.tsx");

export { getProductOrbPrice };
export { getProductFiatPrice };
export { getHasOrbPrice };
export { getHasNonOrbPrice };
export const isOrbsExclusiveProduct = function isOrbsExclusiveProduct(product) {
  if (null == product) {
    return false;
  } else {
    let tmp2 = getHasOrbPrice(product);
    if (tmp2) {
      tmp2 = !getHasNonOrbPrice(product);
    }
    return tmp2;
  }
};
export const isDynamicProduct = function isDynamicProduct(selectedProduct) {
  let tmp = null != selectedProduct;
  if (tmp) {
    let someResult = getProductType(selectedProduct) === require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT;
    if (someResult) {
      const items = selectedProduct.items;
      someResult = items.some((effects) => {
        let someResult = outer1_3(effects);
        if (someResult) {
          effects = effects.effects;
          someResult = effects.some((randomizedSources) => {
            let tmp = null != randomizedSources.randomizedSources;
            if (tmp) {
              tmp = randomizedSources.randomizedSources.length > 0;
            }
            return tmp;
          });
        }
        return someResult;
      });
    }
    tmp = someResult;
    const tmp3 = getProductType(selectedProduct);
  }
  return tmp;
};
export const getProductsWithOrbsPrice = function getProductsWithOrbsPrice(arr) {
  return arr.filter((arg0) => {
    let tmp = outer1_8(arg0);
    if (tmp) {
      tmp = outer1_9(arg0);
    }
    return tmp;
  });
};
export { getIsVariantProduct };
export const getProductSkuIds = function getProductSkuIds(closure_0) {
  if (getIsVariantProduct(closure_0)) {
    const variants = closure_0.variants;
    let mapped = variants.map((skuId) => skuId.skuId);
  } else {
    mapped = [closure_0.skuId];
  }
  return mapped;
};
export const getSelectedProduct = function getSelectedProduct(product, defaultVariantIndex) {
  let tmp = product;
  if (getIsVariantProduct(product)) {
    tmp = product;
    if (null != defaultVariantIndex) {
      tmp = product;
      if (null != product.variants[defaultVariantIndex]) {
        tmp = tmp3;
      }
    }
  }
  return tmp;
};
export { getProductType };
