// Module ID: 5609
// Function ID: 47740
// Name: transformStorefrontSKUPricesServer
// Dependencies: []
// Exports: isSlayerSkuAvailableOnThisPlatform, transformStorefrontPricesServer, useFormattedSKUPrice, useSKUOrbPrice

// Module 5609 (transformStorefrontSKUPricesServer)
function transformStorefrontSKUPricesServer(arr) {
  return arr.map((currency) => ({ currency: currency.currency, amount: currency.amount }));
}
function transformStorefrontPricesResultMapServer(pricing_result_id_map) {
  return importDefault(dependencyMap[6]).mapValues(pricing_result_id_map, (arg0) => callback(closure_2[6]).mapValues(arg0, (user_price) => {
    const obj = { userPrice: callback2(user_price.user_price), prices: callback(closure_2[6]).mapValues(user_price.prices, (arg0) => callback(closure_2[6]).mapValues(arg0, (arg0) => callback(arg0))) };
    return obj;
  }));
}
function transformStorefrontRewardsResultMapServer(reward_result_id_map) {
  return importDefault(dependencyMap[6]).mapValues(reward_result_id_map, (arg0) => callback(closure_2[6]).mapValues(arg0, (type) => ({ type: type.type, amount: type.amount })));
}
function transformPriceSetAssignmentToStorefrontPurchaseType(arg0) {
  if (null == arg0) {
    return arg1(dependencyMap[7]).StorefrontPurchaseType.SELF_PURCHASE;
  } else if (constants.DEFAULT === arg0) {
    return arg1(dependencyMap[7]).StorefrontPurchaseType.SELF_PURCHASE;
  } else if (constants.GIFT === arg0) {
    return arg1(dependencyMap[7]).StorefrontPurchaseType.GIFT;
  } else {
    return arg1(dependencyMap[7]).StorefrontPurchaseType.SELF_PURCHASE;
  }
}
function useResolvedUserPrice(sku) {
  sku = sku.sku;
  const arg1 = sku;
  const priceSetAssignmentPurchaseType = sku.priceSetAssignmentPurchaseType;
  const importDefault = priceSetAssignmentPurchaseType;
  const isOrbPrice = sku.isOrbPrice;
  const dependencyMap = isOrbPrice;
  const items = [closure_6];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => {
    let id;
    if (null != sku) {
      id = sku.id;
    }
    let tmp4 = null;
    if (null != id) {
      tmp4 = id;
    }
    return pricesForSkuId.getPricesForSkuId(tmp4);
  });
  const React = stateFromStores;
  const items1 = [sku, stateFromStores, priceSetAssignmentPurchaseType, isOrbPrice];
  return React.useMemo(() => {
    const tmp = callback(priceSetAssignmentPurchaseType);
    if (null != sku) {
      if (null != stateFromStores) {
        let tmp3 = stateFromStores[tmp];
        if (null == tmp3) {
          tmp3 = stateFromStores[closure_0(undefined, closure_2[7]).StorefrontPurchaseType.SELF_PURCHASE];
        }
        let obj = {};
        let found;
        if (null != tmp3) {
          const userPrice = tmp3.userPrice;
          if (null != userPrice) {
            found = userPrice.find((currency) => {
              currency = currency.currency;
              const DISCORD_ORB = constants.DISCORD_ORB;
              return closure_2 ? currency === DISCORD_ORB : currency !== DISCORD_ORB;
            });
          }
        }
        obj.userPrice = found;
        obj.pricesForPurchaseType = tmp3;
        obj.purchaseType = tmp;
        obj.storeHasPrice = true;
        return obj;
      }
    }
    obj = { userPrice: undefined, pricesForPurchaseType: undefined, purchaseType: tmp, storeHasPrice: null != stateFromStores };
    return obj;
  }, items1);
}
function useSKUPrice(sku) {
  sku = sku.sku;
  const arg1 = sku;
  let DEFAULT = sku.priceSetAssignmentPurchaseType;
  if (DEFAULT === undefined) {
    DEFAULT = constants.DEFAULT;
  }
  const importDefault = DEFAULT;
  let dependencyMap;
  let React;
  let closure_4;
  let closure_5;
  let closure_6;
  let stateFromStores;
  const obj = { sku, priceSetAssignmentPurchaseType: DEFAULT, isOrbPrice: false };
  const tmp2 = useResolvedUserPrice(obj);
  const userPrice = tmp2.userPrice;
  dependencyMap = userPrice;
  const pricesForPurchaseType = tmp2.pricesForPurchaseType;
  React = pricesForPurchaseType;
  const purchaseType = tmp2.purchaseType;
  closure_4 = purchaseType;
  const storeHasPrice = tmp2.storeHasPrice;
  closure_5 = storeHasPrice;
  const items = [closure_6];
  const stateFromStoresArray = arg1(dependencyMap[10]).useStateFromStoresArray(items, () => {
    let id;
    if (null != sku) {
      id = sku.id;
    }
    let rewardsForSkuId = stateFromStoresArray.getRewardsForSkuId(id);
    if (null == rewardsForSkuId) {
      rewardsForSkuId = [];
    }
    return rewardsForSkuId;
  });
  closure_6 = stateFromStoresArray;
  const obj2 = arg1(dependencyMap[10]);
  const items1 = [closure_5];
  stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items1, () => storeHasPrice.getCurrentUser());
  const items2 = [sku, DEFAULT, , , , , , ];
  let premiumType;
  if (null != stateFromStores) {
    premiumType = stateFromStores.premiumType;
  }
  items2[2] = premiumType;
  items2[3] = storeHasPrice;
  items2[4] = userPrice;
  items2[5] = pricesForPurchaseType;
  items2[6] = purchaseType;
  items2[7] = stateFromStoresArray;
  return React.useMemo(() => {
    if (null == sku) {
      return { <string:3752558061>: 11913815630712838000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, <string:1304387174>: 61141391887080580000000000000000000, <string:979689656>: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009030216653543717, <string:1386888022>: 2123526618575307800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
    } else if (storeHasPrice) {
      const found = stateFromStoresArray.find((arg0) => {
        if (null == arg0[closure_4]) {
          return false;
        } else {
          const type2 = tmp.type;
          if (callback(closure_2[7]).StorefrontPromotionRewardType.DISCOUNT === type2) {
            return true;
          } else {
            if (callback(closure_2[7]).StorefrontPromotionRewardType.FIXED_PRICE !== type2) {
              if (callback(closure_2[7]).StorefrontPromotionRewardType.ACTION !== type2) {
                const type = tmp.type;
                return false;
              }
            }
            return false;
          }
        }
      });
      let tmp15 = null;
      if (null != found) {
        tmp15 = found[closure_4];
      }
      let tmp17 = null;
      if (null != tmp15) {
        tmp17 = null;
        if (null != userPrice) {
          tmp17 = userPrice;
        }
      }
      let amount = null;
      if (null != tmp15) {
        amount = null;
        if (tmp15.amount > 0) {
          amount = tmp15.amount;
        }
      }
      if (null != tmp15) {
        let found1;
        if (null != pricesForPurchaseType) {
          if (null != pricesForPurchaseType.prices[closure_9.BASE]) {
            if (null != tmp25[closure_0(undefined, closure_2[7]).StorefrontPriceVariant.NORMAL]) {
              found1 = arr.find((currency) => currency.currency !== constants.DISCORD_ORB);
            }
          }
        }
        let tmp20 = found1;
      } else {
        tmp20 = userPrice;
      }
      let obj = {};
      let tmp28 = null;
      if (null != tmp20) {
        tmp28 = tmp20;
      }
      obj.normalPrice = tmp28;
      obj.discountedPrice = tmp17;
      obj.discountPercent = amount;
      let tmp30 = null;
      if (null != userPrice) {
        tmp30 = userPrice;
      }
      obj.userPrice = tmp30;
      return obj;
    } else {
      if (sku.productLine === constants.SOCIAL_LAYER_GAME_ITEM) {
        obj = sku(userPrice[11]);
        let price = obj.getPrice(sku, DEFAULT);
      } else {
        let premiumType;
        if (null != stateFromStores) {
          premiumType = stateFromStores.premiumType;
        }
        price = sku.getPrice(premiumType);
      }
      let tmp12 = null;
      if (null != price) {
        tmp12 = price;
      }
      obj = { <string:979689656>: "Normal", <string:1386888022>: true, <string:2114771812>: "AbortSignal", normalPrice: tmp12, userPrice: tmp12 };
      return obj;
    }
  }, items2);
}
function formatSKUPrice(arg0, arg1) {
  let discountPercent;
  let discountedPrice;
  let normalPrice;
  let userPrice;
  ({ normalPrice, discountedPrice, discountPercent, userPrice } = arg0);
  const obj = {};
  let formatPriceResult = null;
  if (null != normalPrice) {
    formatPriceResult = arg1(dependencyMap[12]).formatPrice(normalPrice.amount, normalPrice.currency);
    const obj2 = arg1(dependencyMap[12]);
  }
  obj.normalPrice = formatPriceResult;
  let formatPriceResult1 = null;
  if (null != discountedPrice) {
    formatPriceResult1 = arg1(dependencyMap[12]).formatPrice(discountedPrice.amount, discountedPrice.currency);
    const obj3 = arg1(dependencyMap[12]);
  }
  obj.discountedPrice = formatPriceResult1;
  let formatPercentResult = null;
  if (null != discountPercent) {
    formatPercentResult = arg1(dependencyMap[12]).formatPercent(arg1, -discountPercent / 100);
    const obj4 = arg1(dependencyMap[12]);
  }
  obj.discountPercent = formatPercentResult;
  let formatPriceResult2 = null;
  if (null != userPrice) {
    formatPriceResult2 = arg1(dependencyMap[12]).formatPrice(userPrice.amount, userPrice.currency);
    const obj5 = arg1(dependencyMap[12]);
  }
  obj.userPrice = formatPriceResult2;
  return obj;
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ CurrencyCodes: closure_7, PriceSetAssignmentPurchaseTypes: closure_8, PriceTypes: closure_9, SKUFlags: closure_10, SKUProductLines: closure_11 } = arg1(dependencyMap[4]));
const PremiumTypes = arg1(dependencyMap[5]).PremiumTypes;
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/storefront/StorefrontUtils.tsx");

export const transformStorefrontPricesServer = function transformStorefrontPricesServer(body) {
  const obj = { skuPriceMap: importDefault(dependencyMap[6]).mapValues(body.sku_price_map, (pricingResultId) => ({ pricingResultId: pricingResultId.pricing_result_id, rewardResultIds: pricingResultId.reward_result_ids })), pricingResultIdMap: transformStorefrontPricesResultMapServer(body.pricing_result_id_map), rewardResultIdMap: transformStorefrontRewardsResultMapServer(body.reward_result_id_map) };
  return obj;
};
export { transformPriceSetAssignmentToStorefrontPurchaseType };
export const isSlayerSkuAvailableOnThisPlatform = function isSlayerSkuAvailableOnThisPlatform(sku) {
  if (null != sku) {
    if (sku.productLine === constants3.SOCIAL_LAYER_GAME_ITEM) {
      let flags;
      if (null != sku) {
        flags = sku.flags;
      }
      let num = 0;
      if (null != flags) {
        num = flags;
      }
      if (obj.isIOS()) {
        let tmp4Result = tmp4(tmp5[9]);
        let hasFlagResult = tmp4Result.hasFlag(num, constants2.AVAILABLE_ON_IOS);
      } else {
        tmp4Result = tmp4(tmp5[8]);
        hasFlagResult = !tmp4Result.isAndroid();
        if (!hasFlagResult) {
          hasFlagResult = arg1(dependencyMap[9]).hasFlag(num, constants2.AVAILABLE_ON_ANDROID);
          const obj3 = arg1(dependencyMap[9]);
        }
      }
      return hasFlagResult;
    }
  }
  return false;
};
export { useSKUPrice };
export const useFormattedSKUPrice = function useFormattedSKUPrice(priceSetAssignmentPurchaseType) {
  let DEFAULT = priceSetAssignmentPurchaseType.priceSetAssignmentPurchaseType;
  if (DEFAULT === undefined) {
    DEFAULT = constants.DEFAULT;
  }
  let arg1;
  let importDefault;
  const obj = { sku: priceSetAssignmentPurchaseType.sku, priceSetAssignmentPurchaseType: DEFAULT };
  const tmp2 = useSKUPrice(obj);
  arg1 = tmp2;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => locale.locale);
  importDefault = stateFromStores;
  const items1 = [tmp2, stateFromStores];
  return React.useMemo(() => callback(tmp2, stateFromStores), items1);
};
export { formatSKUPrice };
export const useSKUOrbPrice = function useSKUOrbPrice(sku) {
  sku = sku.sku;
  const arg1 = sku;
  let DEFAULT = sku.priceSetAssignmentPurchaseType;
  if (DEFAULT === undefined) {
    DEFAULT = constants.DEFAULT;
  }
  let importDefault;
  let dependencyMap;
  let React;
  let closure_4;
  const obj = { sku, priceSetAssignmentPurchaseType: DEFAULT, isOrbPrice: true };
  const tmp2 = useResolvedUserPrice(obj);
  const userPrice = tmp2.userPrice;
  importDefault = userPrice;
  const storeHasPrice = tmp2.storeHasPrice;
  dependencyMap = storeHasPrice;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => currentUser.getCurrentUser());
  React = stateFromStores;
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => userPrice(storeHasPrice[13]).isPremium(stateFromStores, TIER_2.TIER_2), items1);
  closure_4 = memo;
  const items2 = [sku, memo, storeHasPrice, userPrice];
  return React.useMemo(() => {
    if (null == sku) {
      return null;
    } else if (storeHasPrice) {
      let tmp9 = null;
      if (null != userPrice) {
        tmp9 = userPrice;
      }
      return tmp9;
    } else {
      let obj = sku(storeHasPrice[14]);
      const orbPriceFromPrices = obj.getOrbPriceFromPrices(sku.prices, memo);
      let tmp7 = null;
      if (null != orbPriceFromPrices) {
        obj = {};
        ({ amount: obj2.amount, currency: obj2.currency } = orbPriceFromPrices);
        tmp7 = obj;
      }
      return tmp7;
    }
  }, items2);
};
