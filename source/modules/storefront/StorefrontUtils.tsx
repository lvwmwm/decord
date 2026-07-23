// Module ID: 5615
// Function ID: 47824
// Name: transformStorefrontSKUPricesServer
// Dependencies: [31, 1921, 1849, 5616, 653, 1851, 22, 5617, 478, 1360, 566, 5611, 5618, 3776, 5625, 2]
// Exports: isSlayerSkuAvailableOnThisPlatform, transformStorefrontPricesServer, useFormattedSKUPrice, useSKUOrbPrice

// Module 5615 (transformStorefrontSKUPricesServer)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";
import { PremiumTypes } from "GuildFeatures";

let closure_10;
let closure_11;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function transformStorefrontSKUPricesServer(arr) {
  return arr.map((currency) => ({ currency: currency.currency, amount: currency.amount }));
}
function transformStorefrontPricesResultMapServer(pricing_result_id_map) {
  return importDefault(22).mapValues(pricing_result_id_map, (arg0) => outer1_1(outer1_2[6]).mapValues(arg0, (user_price) => {
    const obj = { userPrice: outer2_13(user_price.user_price), prices: outer2_1(outer2_2[6]).mapValues(user_price.prices, (arg0) => outer3_1(outer3_2[6]).mapValues(arg0, (arg0) => outer4_13(arg0))) };
    return obj;
  }));
}
function transformStorefrontRewardsResultMapServer(reward_result_id_map) {
  return importDefault(22).mapValues(reward_result_id_map, (arg0) => outer1_1(outer1_2[6]).mapValues(arg0, (type) => ({ type: type.type, amount: type.amount })));
}
function transformPriceSetAssignmentToStorefrontPurchaseType(arg0) {
  if (null == arg0) {
    return require(5617) /* StorefrontPromotionRewardType */.StorefrontPurchaseType.SELF_PURCHASE;
  } else if (constants.DEFAULT === arg0) {
    return require(5617) /* StorefrontPromotionRewardType */.StorefrontPurchaseType.SELF_PURCHASE;
  } else if (constants.GIFT === arg0) {
    return require(5617) /* StorefrontPromotionRewardType */.StorefrontPurchaseType.GIFT;
  } else {
    return require(5617) /* StorefrontPromotionRewardType */.StorefrontPurchaseType.SELF_PURCHASE;
  }
}
function useResolvedUserPrice(sku) {
  sku = sku.sku;
  const priceSetAssignmentPurchaseType = sku.priceSetAssignmentPurchaseType;
  const isOrbPrice = sku.isOrbPrice;
  const items = [closure_6];
  const stateFromStores = sku(isOrbPrice[10]).useStateFromStores(items, () => {
    let id;
    if (null != sku) {
      id = sku.id;
    }
    let tmp4 = null;
    if (null != id) {
      tmp4 = id;
    }
    return outer1_6.getPricesForSkuId(tmp4);
  });
  const items1 = [sku, stateFromStores, priceSetAssignmentPurchaseType, isOrbPrice];
  return stateFromStores.useMemo(() => {
    const tmp = outer1_16(priceSetAssignmentPurchaseType);
    if (null != sku) {
      if (null != stateFromStores) {
        let tmp3 = stateFromStores[tmp];
        if (null == tmp3) {
          tmp3 = stateFromStores[sku(undefined, isOrbPrice[7]).StorefrontPurchaseType.SELF_PURCHASE];
        }
        let obj = {};
        let found;
        if (null != tmp3) {
          const userPrice = tmp3.userPrice;
          if (null != userPrice) {
            found = userPrice.find((currency) => {
              currency = currency.currency;
              const DISCORD_ORB = outer2_7.DISCORD_ORB;
              return outer1_2 ? currency === DISCORD_ORB : currency !== DISCORD_ORB;
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
  let DEFAULT = sku.priceSetAssignmentPurchaseType;
  if (DEFAULT === undefined) {
    DEFAULT = constants.DEFAULT;
  }
  let userPrice;
  let pricesForPurchaseType;
  let purchaseType;
  let storeHasPrice;
  let stateFromStoresArray;
  let stateFromStores;
  let obj = { sku, priceSetAssignmentPurchaseType: DEFAULT, isOrbPrice: false };
  const tmp2 = useResolvedUserPrice(obj);
  userPrice = tmp2.userPrice;
  pricesForPurchaseType = tmp2.pricesForPurchaseType;
  purchaseType = tmp2.purchaseType;
  storeHasPrice = tmp2.storeHasPrice;
  const items = [stateFromStoresArray];
  stateFromStoresArray = sku(userPrice[10]).useStateFromStoresArray(items, () => {
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
  const obj2 = sku(userPrice[10]);
  const items1 = [storeHasPrice];
  stateFromStores = sku(userPrice[10]).useStateFromStores(items1, () => storeHasPrice.getCurrentUser());
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
  return pricesForPurchaseType.useMemo(() => {
    if (null == sku) {
      return { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
    } else if (storeHasPrice) {
      const found = stateFromStoresArray.find((arg0) => {
        if (null == arg0[outer1_4]) {
          return false;
        } else {
          const type2 = tmp.type;
          if (sku(userPrice[7]).StorefrontPromotionRewardType.DISCOUNT === type2) {
            return true;
          } else {
            if (sku(userPrice[7]).StorefrontPromotionRewardType.FIXED_PRICE !== type2) {
              if (sku(userPrice[7]).StorefrontPromotionRewardType.ACTION !== type2) {
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
        tmp15 = found[purchaseType];
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
          if (null != pricesForPurchaseType.prices[outer1_9.BASE]) {
            const arr = tmp25[sku(undefined, userPrice[7]).StorefrontPriceVariant.NORMAL];
            if (null != arr) {
              found1 = arr.find((currency) => currency.currency !== stateFromStores.DISCORD_ORB);
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
      if (sku.productLine === outer1_11.SOCIAL_LAYER_GAME_ITEM) {
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
      obj = { normalPrice: tmp12, discountedPrice: null, discountPercent: null, userPrice: tmp12 };
      return obj;
    }
  }, items2);
}
function useFormatSKUPrice(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_4.locale);
  const items1 = [arg0, stateFromStores];
  return React.useMemo(() => outer1_20(closure_0, stateFromStores), items1);
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
    formatPriceResult = require(5618) /* formatSingleCurrencyPrice */.formatPrice(normalPrice.amount, normalPrice.currency);
    const obj2 = require(5618) /* formatSingleCurrencyPrice */;
  }
  obj.normalPrice = formatPriceResult;
  let formatPriceResult1 = null;
  if (null != discountedPrice) {
    formatPriceResult1 = require(5618) /* formatSingleCurrencyPrice */.formatPrice(discountedPrice.amount, discountedPrice.currency);
    const obj3 = require(5618) /* formatSingleCurrencyPrice */;
  }
  obj.discountedPrice = formatPriceResult1;
  let formatPercentResult = null;
  if (null != discountPercent) {
    formatPercentResult = require(5618) /* formatSingleCurrencyPrice */.formatPercent(arg1, -discountPercent / 100);
    const obj4 = require(5618) /* formatSingleCurrencyPrice */;
  }
  obj.discountPercent = formatPercentResult;
  let formatPriceResult2 = null;
  if (null != userPrice) {
    formatPriceResult2 = require(5618) /* formatSingleCurrencyPrice */.formatPrice(userPrice.amount, userPrice.currency);
    const obj5 = require(5618) /* formatSingleCurrencyPrice */;
  }
  obj.userPrice = formatPriceResult2;
  return obj;
}
({ CurrencyCodes: closure_7, PriceSetAssignmentPurchaseTypes: closure_8, PriceTypes: closure_9, SKUFlags: closure_10, SKUProductLines: closure_11 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/storefront/StorefrontUtils.tsx");

export const transformStorefrontPricesServer = function transformStorefrontPricesServer(body) {
  const obj = { skuPriceMap: importDefault(22).mapValues(body.sku_price_map, (pricingResultId) => ({ pricingResultId: pricingResultId.pricing_result_id, rewardResultIds: pricingResultId.reward_result_ids })), pricingResultIdMap: transformStorefrontPricesResultMapServer(body.pricing_result_id_map), rewardResultIdMap: transformStorefrontRewardsResultMapServer(body.reward_result_id_map) };
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
        let tmp4Result = tmp4(1360);
        let hasFlagResult = tmp4Result.hasFlag(num, constants2.AVAILABLE_ON_IOS);
      } else {
        tmp4Result = tmp4(478);
        hasFlagResult = !tmp4Result.isAndroid();
        if (!hasFlagResult) {
          hasFlagResult = require(1360) /* hasFlag */.hasFlag(num, constants2.AVAILABLE_ON_ANDROID);
          const obj3 = require(1360) /* hasFlag */;
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
  const obj = { sku: priceSetAssignmentPurchaseType.sku, priceSetAssignmentPurchaseType: DEFAULT };
  return useFormatSKUPrice(useSKUPrice(obj));
};
export { useFormatSKUPrice };
export { formatSKUPrice };
export const useSKUOrbPrice = function useSKUOrbPrice(sku) {
  sku = sku.sku;
  let DEFAULT = sku.priceSetAssignmentPurchaseType;
  if (DEFAULT === undefined) {
    DEFAULT = constants.DEFAULT;
  }
  let userPrice;
  let storeHasPrice;
  let stateFromStores;
  let memo;
  let obj = { sku, priceSetAssignmentPurchaseType: DEFAULT, isOrbPrice: true };
  const tmp2 = useResolvedUserPrice(obj);
  userPrice = tmp2.userPrice;
  storeHasPrice = tmp2.storeHasPrice;
  const items = [closure_5];
  stateFromStores = sku(storeHasPrice[10]).useStateFromStores(items, () => outer1_5.getCurrentUser());
  const items1 = [stateFromStores];
  memo = stateFromStores.useMemo(() => userPrice(storeHasPrice[13]).isPremium(stateFromStores, outer1_12.TIER_2), items1);
  const items2 = [sku, memo, storeHasPrice, userPrice];
  return stateFromStores.useMemo(() => {
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
