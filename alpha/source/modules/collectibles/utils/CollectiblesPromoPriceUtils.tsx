// Module ID: 9379
// Function ID: 9380
// Name: CollectiblesPromoPriceUtils
// Dependencies: [32, 19, 7187, 9348, 1072, 7188, 9380, 504, 2]
// Exports: areStorefrontPricingPromotionsActive, getCollectiblesPremiumPromoPrice, getCollectiblesPromoPrice, isStorefrontPromotionActive, useCollectiblesStorefrontPrices

// Module 9379 (CollectiblesPromoPriceUtils)
import StorefrontTypes from "StorefrontTypes" /* 7188 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SKUPricesStore from "SKUPricesStore" /* 7187 */;
import StorefrontPromotionStore from "StorefrontPromotionStore" /* 9348 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let metroImportAll;
let metroImportDefault;
let metroRequire;
const f96968 = (startsAt) => {
  let tmp = null != startsAt;
  if (tmp) {
    let tmp3 = null == startsAt.startsAt;
    if (!tmp3) {
      startsAt = startsAt.startsAt;
      tmp3 = startsAt.getTime() <= tmp2;
    }
    let tmp4 = null != startsAt.endsAt;
    if (tmp4) {
      const endsAt = startsAt.endsAt;
      tmp4 = endsAt.getTime() <= tmp2;
    }
    if (tmp3) {
      tmp3 = !tmp4;
    }
    tmp = tmp3;
  }
  return tmp;
};
function getListedPromotions(pricingPromotionIds, promotions) {
  let items = pricingPromotionIds;
  let closure_0 = promotions;
  if (pricingPromotionIds == null) {
    items = [];
  }
  return items.map((item) => {
    let closure_0 = item;
    let found;
    const arr = stateFromStores2;
    if (stateFromStores2 != null) {
      found = arr.find((id) => id.id === closure_0);
    }
    return found;
  });
}
function getNextStorefrontPromotionBoundary(now) {
  let tmp = null;
  now = now.now;
  const tmp2 = getListedPromotions(now.pricingPromotionIds, now.promotions);
  for (const item10015 of tmp2) {
    let tmp3 = item10015;
    let time;
    if (item10015 != null) {
      let startsAt = item10015.startsAt;
      if (startsAt != null) {
        time = startsAt.getTime();
      }
    }
    let items = [time, ];
    let time1;
    if (tmp3 != null) {
      let endsAt = tmp3.endsAt;
      if (endsAt != null) {
        time1 = endsAt.getTime();
      }
    }
    items[1] = time1;
    for (const item10033 of items) {
      let tmp9 = item10033;
      let tmp10 = null != item10033;
      if (tmp10) {
        tmp10 = tmp9 > now;
      }
      if (tmp10) {
        let tmp13 = null == tmp;
        if (!tmp13) {
          tmp13 = tmp9 < tmp;
        }
        tmp10 = tmp13;
      }
      if (tmp10) {
        tmp = item10033;
      }
      continue;
    }
    continue;
  }
  return tmp;
}
({ COLLECTIBLES_APPLICATION_ID: metroRequire, CurrencyCodes: metroImportDefault, PriceTypes: metroImportAll } = Constants);
const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesPromoPriceUtils.tsx");

export function getCollectiblesPromoPrice(arg0) {
  let nonPromoPrice;
  let storefrontPrices;
  let userPrice;
  ({ storefrontPrices, nonPromoPrice } = arg0);
  if (storefrontPrices != null) {
    const tmp3 = storefrontPrices[StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE];
    if (tmp3 != null) {
      userPrice = tmp3.userPrice;
    }
  }
  let tmp4 = null;
  if (null != nonPromoPrice) {
    tmp4 = null;
    if (nonPromoPrice.currency !== metroImportDefault.DISCORD_ORB) {
      let found;
      if (userPrice != null) {
        found = userPrice.find((currency) => currency.currency === premiumPrice.currency);
      }
      let tmp7 = null;
      if (null != found) {
        tmp7 = null;
        if (found.amount < nonPromoPrice.amount) {
          const obj = { amount: found.amount };
          const merged = Object.assign(nonPromoPrice);
          tmp7 = obj;
        }
      }
      tmp4 = tmp7;
    }
  }
  return tmp4;
}
export function getCollectiblesPremiumPromoPrice(arg0) {
  let arr;
  let premiumPrice;
  let storefrontPrices;
  ({ storefrontPrices, premiumPrice } = arg0);
  if (storefrontPrices != null) {
    const tmp3 = storefrontPrices[StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE];
    const tmp = require;
    if (tmp3 != null) {
      if (tmp3.prices[metroImportAll.PREMIUM_TIER_2] != null) {
        arr = tmp3.prices[metroImportAll.PREMIUM_TIER_2][tmp(undefined, 7188).StorefrontPriceVariant.DISCOUNTED];
      }
    }
  }
  let tmp6 = null;
  if (null != premiumPrice) {
    tmp6 = null;
    if (premiumPrice.currency !== metroImportDefault.DISCORD_ORB) {
      let found;
      if (arr != null) {
        found = arr.find((currency) => currency.currency === premiumPrice.currency);
      }
      let tmp9 = null;
      if (null != found) {
        tmp9 = null;
        if (found.amount < premiumPrice.amount) {
          const obj = { amount: found.amount };
          const merged = Object.assign(premiumPrice);
          tmp9 = obj;
        }
      }
      tmp6 = tmp9;
    }
  }
  return tmp6;
}
export function isStorefrontPromotionActive(startsAt, now) {
  let tmp = null == startsAt.startsAt;
  if (!tmp) {
    startsAt = startsAt.startsAt;
    tmp = startsAt.getTime() <= now;
  }
  let tmp2 = null != startsAt.endsAt;
  if (tmp2) {
    const endsAt = startsAt.endsAt;
    tmp2 = endsAt.getTime() <= now;
  }
  if (tmp) {
    tmp = !tmp2;
  }
  return tmp;
}
export function areStorefrontPricingPromotionsActive(arg0) {
  let closure_129_0;
  let pricingPromotionIds;
  let require;
  ({ pricingPromotionIds, now: require, promotions: closure_129_0 } = arg0);
  if (pricingPromotionIds == null) {
    pricingPromotionIds = [];
  }
  const mapped = pricingPromotionIds.map((item) => {
    let closure_0 = item;
    let found;
    const arr = stateFromStores2;
    if (stateFromStores2 != null) {
      found = arr.find((id) => id.id === closure_0);
    }
    return found;
  });
  const tmp = mapped.length > 0 && mapped.every(f96968);
  return tmp;
}
export { getNextStorefrontPromotionBoundary };
export function useCollectiblesStorefrontPrices(skuId, collectibles_pricing_promotion_eligibility) {
  let c0;
  let closure_1;
  let tmp5;
  _require = skuId;
  const obj = require("CollectiblesStorefrontPricingIntegrationExperiment");
  obj.useCollectiblesStorefrontPricingIntegrationEnabled(collectibles_pricing_promotion_eligibility);
  const items = [SKUPricesStore];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let pricesForSkuId;
    if (closure_1) {
      pricesForSkuId = SKUPricesStore.getPricesForSkuId(skuId);
    }
    return pricesForSkuId;
  });
  const items1 = [SKUPricesStore];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let promotionIdsForSkuId;
    if (closure_1) {
      promotionIdsForSkuId = SKUPricesStore.getPromotionIdsForSkuId(skuId);
    }
    return promotionIdsForSkuId;
  });
  const items2 = [StorefrontPromotionStore];
  const obj4 = require("get initialized");
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    let promotionsForApplication = null;
    if (closure_1) {
      promotionsForApplication = StorefrontPromotionStore.getPromotionsForApplication(metroRequire);
    }
    return promotionsForApplication;
  });
  c0 = undefined;
  let tmp4 = _slicedToArray(react.useState(Date.now), 2);
  [tmp5, c0] = tmp4;
  const tmp6 = getNextStorefrontPromotionBoundary({ pricingPromotionIds: stateFromStores1, promotions: stateFromStores2, now: tmp5 });
  dependencyMap = tmp6;
  const items3 = [tmp6, tmp5];
  const effect = react.useEffect(() => {
    let closure_0;
    if (null != closure_1) {
      const _Math = Math;
      const _Math2 = Math;
      const _Date = Date;
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_0(Date.now()), Math.min(Math.max(tmp - Date.now(), 0), 2147483647));
      return () => clearTimeout(closure_0);
    }
  }, items3);
  _require = tmp5;
  let items4 = stateFromStores1;
  if (stateFromStores1 == null) {
    items4 = [];
  }
  const mapped = items4.map((item) => {
    let closure_0 = item;
    let found;
    const arr = stateFromStores2;
    if (stateFromStores2 != null) {
      found = arr.find((id) => id.id === closure_0);
    }
    return found;
  });
  let tmp9;
  const tmp8 = mapped.length > 0 && mapped.every(f96968);
  if (tmp8) {
    tmp9 = stateFromStores;
  }
  return tmp9;
}
