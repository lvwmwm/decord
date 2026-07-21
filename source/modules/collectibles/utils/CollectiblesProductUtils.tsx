// Module ID: 6780
// Function ID: 53461
// Name: getProductOrbPrice
// Dependencies: []
// Exports: getProductSkuIds, getProductsWithOrbsPrice, getSelectedProduct, isDynamicProduct, isOrbsExclusiveProduct

// Module 6780 (getProductOrbPrice)
function getProductOrbPrice(arg0) {
  let substr;
  if (null != arg0.product.prices[arg0.hasShopDiscount ? closure_5.PREMIUM_TIER_2 : closure_5.DEFAULT]) {
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
  const found = substr.find((currency) => currency.currency === constants.DISCORD_ORB);
  let tmp4 = null;
  if (null != found) {
    tmp4 = found;
  }
  return tmp4;
}
function getProductFiatPrice(arg0) {
  let substr;
  if (null != arg0.product.prices[arg0.hasShopDiscount ? closure_5.MOBILE_PREMIUM_TIER_2 : closure_5.MOBILE]) {
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
  const found = substr.find((currency) => currency.currency !== constants.DISCORD_ORB);
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
  let tmp = product.type === arg1(dependencyMap[3]).CollectiblesItemType.VARIANTS_GROUP;
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
  } else if (product.type === arg1(dependencyMap[3]).CollectiblesItemType.VARIANTS_GROUP) {
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
let closure_2 = importDefault(dependencyMap[0]);
const isProfileEffectRecord = arg1(dependencyMap[1]).isProfileEffectRecord;
({ CurrencyCodes: closure_4, PriceSetAssignmentPurchaseTypes: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/collectibles/utils/CollectiblesProductUtils.tsx");

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
    let someResult = getProductType(selectedProduct) === arg1(dependencyMap[3]).CollectiblesItemType.PROFILE_EFFECT;
    if (someResult) {
      const items = selectedProduct.items;
      someResult = items.some((effects) => {
        let someResult = callback(effects);
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
    let tmp = callback(arg0);
    if (tmp) {
      tmp = callback2(arg0);
    }
    return tmp;
  });
};
export { getIsVariantProduct };
export const getProductSkuIds = function getProductSkuIds(product) {
  if (getIsVariantProduct(product)) {
    const variants = product.variants;
    let mapped = variants.map((skuId) => skuId.skuId);
  } else {
    mapped = [product.skuId];
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
