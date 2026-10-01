// Module ID: 6652
// Function ID: 6653
// Name: StorefrontUtils
// Dependencies: [19, 2112, 1372, 6653, 1074, 1374, 12, 6654, 1365, 1385, 504, 6647, 6655, 4488, 6662, 2]
// Exports: isSlayerSkuAvailableOnThisPlatform, transformPriceSetAssignmentToStorefrontPurchaseType, transformStorefrontPricesServer, useFormatSKUPrice, useFormattedSKUPrice, useSKUOrbPrice

// Module 6652 (StorefrontUtils)
import _modDef12 from "module_12" /* 12 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6647 */;
import StorefrontTypes from "StorefrontTypes" /* 6654 */;
import PriceUtils from "PriceUtils" /* 6655 */;
import OrbCheckoutUtils from "OrbCheckoutUtils" /* 6662 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import UserStore from "UserStore" /* 1372 */;
import SKUPricesStore from "SKUPricesStore" /* 6653 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, getPricesForSkuId, user_price;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
const f82695 = () => locale.locale;
function useSKUPrice(sku) {
  sku = sku.sku;
  let DEFAULT = sku.priceSetAssignmentPurchaseType;
  if (DEFAULT === undefined) {
    let tmp = constants;
    DEFAULT = constants.DEFAULT;
  }
  let userPrice;
  let pricesForPurchaseType;
  let stateFromStoresArray;
  let c2 = false;
  let obj = sku(userPrice[10]);
  const items = [stateFromStoresArray];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    getPricesForSkuId = getPricesForSkuId.getPricesForSkuId;
    if (sku != null) {
      id = sku.id;
    }
    if (id == null) {
      id = null;
    }
    return getPricesForSkuId(id);
  });
  const items1 = [sku, stateFromStores, DEFAULT, false];
  const memo = pricesForPurchaseType.useMemo(() => {
    let SELF_PURCHASE;
    let tmp3;
    let tmp4;
    if (null == DEFAULT) {
      SELF_PURCHASE = sku(storeHasPrice[7]).StorefrontPurchaseType.SELF_PURCHASE;
      tmp3 = storeHasPrice;
      tmp4 = sku;
    } else if (constants.DEFAULT === DEFAULT) {
      SELF_PURCHASE = sku(storeHasPrice[7]).StorefrontPurchaseType.SELF_PURCHASE;
      tmp3 = storeHasPrice;
      tmp4 = sku;
    } else if (tmp14.GIFT === DEFAULT) {
      SELF_PURCHASE = sku(storeHasPrice[7]).StorefrontPurchaseType.GIFT;
      tmp3 = storeHasPrice;
      tmp4 = sku;
    } else {
      tmp3 = storeHasPrice;
      SELF_PURCHASE = sku(storeHasPrice[7]).StorefrontPurchaseType.SELF_PURCHASE;
      tmp4 = sku;
    }
    if (null != sku) {
      if (null != stateFromStores) {
        let tmp12 = tmp11[SELF_PURCHASE];
        if (tmp12 == null) {
          tmp12 = tmp11[tmp4(undefined, tmp3[7]).StorefrontPurchaseType.SELF_PURCHASE];
        }
        let found;
        if (tmp12 != null) {
          userPrice = tmp12.userPrice;
          if (userPrice != null) {
            found = userPrice.find((currency) => {
              currency = currency.currency;
              const DISCORD_ORB = constants.DISCORD_ORB;
              return closure_1_2 ? currency === DISCORD_ORB : currency !== DISCORD_ORB;
            });
          }
        }
        return { userPrice: found, pricesForPurchaseType: tmp12, purchaseType: SELF_PURCHASE, storeHasPrice: true };
      }
    }
    return { userPrice: "r", pricesForPurchaseType: "disabled", purchaseType: SELF_PURCHASE, storeHasPrice: null != stateFromStores };
  }, items1);
  userPrice = memo.userPrice;
  pricesForPurchaseType = memo.pricesForPurchaseType;
  const purchaseType = memo.purchaseType;
  const storeHasPrice = memo.storeHasPrice;
  let obj2 = sku(userPrice[10]);
  const items2 = [stateFromStoresArray];
  stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => {
    let id;
    const getRewardsForSkuId = SKUPricesStore.getRewardsForSkuId;
    if (sku != null) {
      id = sku.id;
    }
    let rewardsForSkuId = getRewardsForSkuId(id);
    if (rewardsForSkuId == null) {
      rewardsForSkuId = [];
    }
    return rewardsForSkuId;
  });
  const obj3 = sku(userPrice[10]);
  const items3 = [storeHasPrice];
  const stateFromStores1 = obj3.useStateFromStores(items3, () => storeHasPrice.getCurrentUser());
  const items4 = [sku, DEFAULT, , , , , , ];
  let premiumType;
  const useMemo = pricesForPurchaseType.useMemo;
  if (stateFromStores1 != null) {
    premiumType = stateFromStores1.premiumType;
  }
  items4[2] = premiumType;
  items4[3] = storeHasPrice;
  items4[4] = userPrice;
  items4[5] = pricesForPurchaseType;
  items4[6] = purchaseType;
  items4[7] = stateFromStoresArray;
  return useMemo(() => {
    let tmp20;
    const tmp = sku;
    if (null == sku) {
      return { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
    } else {
      const tmp21 = storeHasPrice;
      if (tmp21) {
        let tmp14;
        const found = stateFromStoresArray.find((item) => {
          if (null == item[purchaseType]) {
            return false;
          } else {
            const type2 = tmp.type;
            if (sku(userPrice[7]).StorefrontPromotionRewardType.DISCOUNT === type2) {
              return true;
            } else {
              if (sku(userPrice[7]).StorefrontPromotionRewardType.FIXED_PRICE !== type2) {
                if (sku(userPrice[7]).StorefrontPromotionRewardType.ACTION !== type2) {
                  if (sku(userPrice[7]).StorefrontPromotionRewardType.BENEFIT !== type2) {
                    const type = tmp.type;
                    return false;
                  }
                }
              }
              return false;
            }
          }
        });
        let tmp10 = null;
        if (null != found) {
          tmp10 = found[purchaseType];
        }
        let tmp12 = null;
        if (null != tmp10) {
          tmp12 = null;
          if (null != userPrice) {
            tmp12 = userPrice;
          }
        }
        let amount = null;
        if (null != tmp10) {
          amount = null;
          if (tmp10.amount > 0) {
            amount = tmp10.amount;
          }
        }
        if (null != tmp10) {
          let found1;
          if (pricesForPurchaseType != null) {
            if (pricesForPurchaseType.prices[constants.BASE] != null) {
              const arr = pricesForPurchaseType.prices[constants.BASE][StorefrontTypes.StorefrontPriceVariant.NORMAL];
              if (arr != null) {
                found1 = arr.find((currency) => currency.currency !== constants.DISCORD_ORB);
              }
            }
          }
          tmp14 = found1;
        } else {
          tmp14 = userPrice;
        }
        if (tmp14 == null) {
          tmp14 = null;
        }
        const obj2 = { normalPrice: tmp14, discountedPrice: tmp12, discountPercent: amount, userPrice: tmp20 };
        tmp20 = userPrice;
        if (userPrice == null) {
          tmp20 = null;
        }
        return obj2;
      } else {
        let price;
        if (tmp.productLine === unpackModuleId.SOCIAL_LAYER_GAME_ITEM) {
          const obj = SlayerStorefrontUtils;
          price = obj.getPrice(tmp, DEFAULT);
        } else {
          let premiumType;
          const getPrice = tmp.getPrice;
          if (stateFromStores1 != null) {
            premiumType = stateFromStores1.premiumType;
          }
          price = getPrice(premiumType);
        }
        if (price == null) {
          price = null;
        }
        return { normalPrice: price, discountedPrice: null, discountPercent: null, userPrice: price };
      }
    }
  }, items4);
}
function formatSKUPrice(arg0, stateFromStores) {
  let discountPercent;
  let discountedPrice;
  let formatPercentResult;
  let formatPriceResult1;
  let formatPriceResult2;
  let normalPrice;
  let userPrice;
  ({ normalPrice, discountedPrice, discountPercent, userPrice } = arg0);
  let formatPriceResult = null;
  if (null != normalPrice) {
    const obj = PriceUtils;
    formatPriceResult = obj.formatPrice(normalPrice.amount, normalPrice.currency);
  }
  const obj2 = { normalPrice: formatPriceResult, discountedPrice: formatPriceResult1, discountPercent: formatPercentResult, userPrice: formatPriceResult2 };
  formatPriceResult1 = null;
  if (null != discountedPrice) {
    const obj3 = PriceUtils;
    formatPriceResult1 = obj3.formatPrice(discountedPrice.amount, discountedPrice.currency);
  }
  formatPercentResult = null;
  if (null != discountPercent) {
    const obj4 = PriceUtils;
    formatPercentResult = obj4.formatPercent(stateFromStores, -discountPercent / 100);
  }
  formatPriceResult2 = null;
  if (null != userPrice) {
    const obj5 = PriceUtils;
    formatPriceResult2 = obj5.formatPrice(userPrice.amount, userPrice.currency);
  }
  return obj2;
}
({ CurrencyCodes: metroImportDefault, PriceSetAssignmentPurchaseTypes: metroImportAll, PriceTypes: c9, SKUFlags: c10, SKUProductLines: unpackModuleId } = Constants);
const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/storefront/StorefrontUtils.tsx");

export const transformStorefrontPricesServer = function transformStorefrontPricesServer(storefront_pricing) {
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let pricing_result_id_map;
  let reward_result_id_map;
  let obj = {
    skuPriceMap: obj2.mapValues(storefront_pricing.sku_price_map, (pricingResultId) => ({ pricingResultId: pricingResultId.pricing_result_id, storefrontPromotionIds: pricingResultId.storefront_promotion_ids, rewardResultIds: pricingResultId.reward_result_ids, offerResultIds: pricingResultId.offer_result_ids })),
    pricingResultIdMap: obj3.mapValues(pricing_result_id_map, (arg0) => {
      let obj = _modDef12;
      return obj.mapValues(arg0, (user_price) => {
        let obj2;
        const f82687 = (currency) => ({ currency: currency.currency, amount: currency.amount });
        let obj = {
          userPrice: user_price.map(f82687),
          prices: obj2.mapValues(user_price.prices, (arg0) => {
            const obj = closure_1_1(closure_1_2[6]);
            return obj.mapValues(arg0, (arr) => arr.map(f82687));
          })
        };
        user_price = user_price.user_price;
        obj2 = closure_1_1(closure_1_2[6]);
        return obj;
      });
    }),
    rewardResultIdMap: obj4.mapValues(reward_result_id_map, (arg0) => {
      const obj = _modDef12;
      return obj.mapValues(arg0, (type) => ({ type: type.type, amount: type.amount }));
    }),
    offerResultIdMap: obj5.mapValues(storefront_pricing.offer_result_id_map, (promotionId) => ({ promotionId: promotionId.promotion_id, type: promotionId.type, rewardStatus: promotionId.reward_status, purchaseTypes: promotionId.purchase_types, rewardResultId: promotionId.reward_result_id }))
  };
  obj2 = _modDef12;
  pricing_result_id_map = storefront_pricing.pricing_result_id_map;
  reward_result_id_map = storefront_pricing.reward_result_id_map;
  obj3 = _modDef12;
  obj4 = _modDef12;
  obj5 = _modDef12;
  return obj;
};
export const transformPriceSetAssignmentToStorefrontPurchaseType = function transformPriceSetAssignmentToStorefrontPurchaseType(arg0) {
  if (null == arg0) {
    return StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE;
  } else if (metroImportAll.DEFAULT === arg0) {
    return StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE;
  } else if (tmp9.GIFT === arg0) {
    return StorefrontTypes.StorefrontPurchaseType.GIFT;
  } else {
    return StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE;
  }
};
export const isSlayerSkuAvailableOnThisPlatform = function isSlayerSkuAvailableOnThisPlatform(sku) {
  if (null != sku) {
    if (sku.productLine === unpackModuleId.SOCIAL_LAYER_GAME_ITEM) {
      let hasFlagResult;
      let num;
      if (sku != null) {
        num = sku.flags;
      }
      if (num == null) {
        num = 0;
      }
      const obj = utils_PlatformUtils;
      if (obj.isIOS()) {
        const tmpResult = FlagUtils;
        hasFlagResult = tmpResult.hasFlag(num, constants3.AVAILABLE_ON_IOS);
      } else {
        const tmpResult3 = utils_PlatformUtils;
        const isAndroidResult = tmpResult3.isAndroid();
        hasFlagResult = !isAndroidResult;
        if (isAndroidResult) {
          const tmpResult4 = FlagUtils;
          hasFlagResult = tmpResult4.hasFlag(num, constants3.AVAILABLE_ON_ANDROID);
        }
      }
      return hasFlagResult;
    }
  }
  return false;
};
export { useSKUPrice };
export const useFormattedSKUPrice = function useFormattedSKUPrice(priceSetAssignmentPurchaseType) {
  let closure_0;
  let locale;
  let DEFAULT = priceSetAssignmentPurchaseType.priceSetAssignmentPurchaseType;
  const sku = priceSetAssignmentPurchaseType.sku;
  if (DEFAULT === undefined) {
    DEFAULT = constants.DEFAULT;
  }
  const tmp2 = useSKUPrice({ sku, priceSetAssignmentPurchaseType: DEFAULT });
  _require = tmp2;
  const items = [LocaleStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f82695);
  const items1 = [tmp2, stateFromStores];
  return react.useMemo(() => formatSKUPrice(closure_0, stateFromStores), items1);
};
export const useFormatSKUPrice = function useFormatSKUPrice(arg0) {
  let closure_0;
  _require = arg0;
  const items = [LocaleStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f82695);
  const items1 = [arg0, stateFromStores];
  return react.useMemo(() => formatSKUPrice(closure_0, stateFromStores), items1);
};
export { formatSKUPrice };
export const useSKUOrbPrice = function useSKUOrbPrice(sku) {
  let currentUser;
  sku = sku.sku;
  let DEFAULT = sku.priceSetAssignmentPurchaseType;
  if (DEFAULT === undefined) {
    const tmp = constants;
    DEFAULT = constants.DEFAULT;
  }
  let storeHasPrice;
  let stateFromStores1;
  let c2 = true;
  let obj = sku(storeHasPrice[10]);
  const items = [SKUPricesStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    getPricesForSkuId = getPricesForSkuId.getPricesForSkuId;
    if (sku != null) {
      id = sku.id;
    }
    if (id == null) {
      id = null;
    }
    return getPricesForSkuId(id);
  });
  const items1 = [sku, stateFromStores, DEFAULT, true];
  const memo = stateFromStores1.useMemo(() => {
    let SELF_PURCHASE;
    let tmp3;
    let tmp4;
    if (null == DEFAULT) {
      SELF_PURCHASE = sku(storeHasPrice[7]).StorefrontPurchaseType.SELF_PURCHASE;
      tmp3 = storeHasPrice;
      tmp4 = sku;
    } else if (constants.DEFAULT === DEFAULT) {
      SELF_PURCHASE = sku(storeHasPrice[7]).StorefrontPurchaseType.SELF_PURCHASE;
      tmp3 = storeHasPrice;
      tmp4 = sku;
    } else if (tmp14.GIFT === DEFAULT) {
      SELF_PURCHASE = sku(storeHasPrice[7]).StorefrontPurchaseType.GIFT;
      tmp3 = storeHasPrice;
      tmp4 = sku;
    } else {
      tmp3 = storeHasPrice;
      SELF_PURCHASE = sku(storeHasPrice[7]).StorefrontPurchaseType.SELF_PURCHASE;
      tmp4 = sku;
    }
    if (null != sku) {
      if (null != stateFromStores) {
        let tmp12 = tmp11[SELF_PURCHASE];
        if (tmp12 == null) {
          tmp12 = tmp11[tmp4(undefined, tmp3[7]).StorefrontPurchaseType.SELF_PURCHASE];
        }
        let found;
        if (tmp12 != null) {
          userPrice = tmp12.userPrice;
          if (userPrice != null) {
            found = userPrice.find((currency) => {
              currency = currency.currency;
              const DISCORD_ORB = constants.DISCORD_ORB;
              return closure_1_2 ? currency === DISCORD_ORB : currency !== DISCORD_ORB;
            });
          }
        }
        return { userPrice: found, pricesForPurchaseType: tmp12, purchaseType: SELF_PURCHASE, storeHasPrice: true };
      }
    }
    return { userPrice: "r", pricesForPurchaseType: "disabled", purchaseType: SELF_PURCHASE, storeHasPrice: null != stateFromStores };
  }, items1);
  let userPrice = memo.userPrice;
  storeHasPrice = memo.storeHasPrice;
  const obj2 = sku(storeHasPrice[10]);
  const items2 = [UserStore];
  stateFromStores1 = obj2.useStateFromStores(items2, () => currentUser.getCurrentUser());
  const items3 = [stateFromStores1];
  const memo1 = stateFromStores1.useMemo(() => {
    const obj = PremiumUtilsDefault;
    return obj.isPremium(stateFromStores1, PremiumTypes.TIER_2);
  }, items3);
  const items4 = [sku, memo1, storeHasPrice, userPrice];
  return stateFromStores1.useMemo(() => {
    if (null == sku) {
      return null;
    } else {
      const tmp2 = storeHasPrice;
      if (tmp2) {
        let tmp8 = userPrice;
        if (userPrice == null) {
          tmp8 = null;
        }
        return tmp8;
      } else {
        const obj = OrbCheckoutUtils;
        const orbPriceFromPrices = obj.getOrbPriceFromPrices(tmp.prices, memo1);
        let tmp7 = null;
        if (null != orbPriceFromPrices) {
          const obj3 = { amount: null, currency: null };
          ({ amount: obj2.amount, currency: obj2.currency } = orbPriceFromPrices);
          tmp7 = obj3;
        }
        return tmp7;
      }
    }
  }, items4);
};
