// Module ID: 10010
// Function ID: 10011
// Name: usePromotionMarketingSurface
// Dependencies: [19, 9298, 9623, 10011, 504, 2]
// Exports: usePromotionMarketingComponentData, usePromotionMarketingSurface

// Module 10010 (usePromotionMarketingSurface)
import react from "react" /* 19 */;
import UserOfferStore from "UserOfferStore" /* 9298 */;
import PromotionsStore from "PromotionsStore" /* 9623 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, userTrialOffer;

const f99416 = () => {
  const obj = PREMIUM_TAB(dependencyMap[3]);
  const result = obj.maybeFetchActivePromotions();
};
let result = size.fileFinishedImporting("modules/premium/hooks/usePromotionMarketingSurface.tsx");

export function usePromotionMarketingSurface(PREMIUM_TAB) {
  _require = PREMIUM_TAB;
  const f99421 = () => PromotionsStore.getMarketingComponentBySurface(f99421);
  let obj = react;
  const effect = react.useEffect(f99416, []);
  const items = [PromotionsStore, UserOfferStore];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const tmp = f99421();
    if (null == tmp) {
      return null;
    } else {
      const marketingPromotionForEligibility = PromotionsStore.getMarketingPromotionForEligibility(tmp.promotionId);
      let trialId;
      if (marketingPromotionForEligibility != null) {
        trialId = marketingPromotionForEligibility.trialId;
      }
      if (null != trialId) {
        userTrialOffer = userTrialOffer.getUserTrialOffer(marketingPromotionForEligibility.trialId);
        return null;
      }
      return tmp;
    }
  });
  const items1 = [PromotionsStore];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let str;
    const getMarketingPromotionForEligibility = PromotionsStore.getMarketingPromotionForEligibility;
    if (stateFromStores != null) {
      str = stateFromStores.promotionId;
    }
    if (str == null) {
      str = "";
    }
    return getMarketingPromotionForEligibility(str);
  });
  let endDate;
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  const items2 = [endDate];
  const memo = obj.useMemo(() => {
    const obj = { endDate, expired: false };
    let closure_1 = { endDate, expired: true };
    return () => {
      if (null != endDate) {
        let tmp3;
        const _Date = Date;
        const time = obj.getTime();
        if (time <= Date.now()) {
          tmp3 = closure_1;
        }
        return tmp3;
      }
      tmp3 = obj;
    };
  }, items2);
  const items3 = [endDate];
  let tmp6 = null;
  if (!obj.useSyncExternalStore(obj.useCallback((arg0) => {
    let closure_0 = arg0;
    const obj = endDate;
    if (null == endDate) {
      return () => {

      };
    } else {
      const time = obj.getTime();
      const _Date = Date;
      let diff = time - Date.now();
      if (diff > 0) {
        if (diff < 86400000) {
          function checkExpiry() {
            const diff = time - Date.now();
            if (diff > 0) {
              const _setTimeout = setTimeout;
              const timeout = setTimeout(checkExpiry, diff);
            } else {
              closure_0();
            }
          }
          let _setTimeout = setTimeout;
          let timeout = setTimeout(checkExpiry, diff);
          return () => clearTimeout(closure_1);
        }
      }
      return () => {

      };
    }
  }, items3), memo, memo).expired) {
    tmp6 = stateFromStores;
  }
  return tmp6;
}
export function usePromotionMarketingComponentData(arg0) {
  let closure_0;
  let endDate;
  let stateFromStores;
  _require = arg0;
  const effect = endDate.useEffect(f99416, []);
  const items = [PromotionsStore, UserOfferStore];
  const obj2 = require("get initialized");
  stateFromStores = obj2.useStateFromStores(items, () => {
    const tmp = f99421();
    if (null == tmp) {
      return null;
    } else {
      const marketingPromotionForEligibility = PromotionsStore.getMarketingPromotionForEligibility(tmp.promotionId);
      let trialId;
      if (marketingPromotionForEligibility != null) {
        trialId = marketingPromotionForEligibility.trialId;
      }
      if (null != trialId) {
        userTrialOffer = userTrialOffer.getUserTrialOffer(marketingPromotionForEligibility.trialId);
        return null;
      }
      return tmp;
    }
  });
  const items1 = [PromotionsStore];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let str;
    const getMarketingPromotionForEligibility = PromotionsStore.getMarketingPromotionForEligibility;
    if (stateFromStores != null) {
      str = stateFromStores.promotionId;
    }
    if (str == null) {
      str = "";
    }
    return getMarketingPromotionForEligibility(str);
  });
  endDate = undefined;
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  const items2 = [endDate];
  const memo = obj.useMemo(() => {
    const obj = { endDate, expired: false };
    let closure_1 = { endDate, expired: true };
    return () => {
      if (null != endDate) {
        let tmp3;
        const _Date = Date;
        const time = obj.getTime();
        if (time <= Date.now()) {
          tmp3 = closure_1;
        }
        return tmp3;
      }
      tmp3 = obj;
    };
  }, items2);
  const items3 = [endDate];
  let tmp6 = null;
  if (!endDate.useSyncExternalStore(endDate.useCallback((arg0) => {
    let closure_0 = arg0;
    const obj = endDate;
    if (null == endDate) {
      return () => {

      };
    } else {
      const time = obj.getTime();
      const _Date = Date;
      let diff = time - Date.now();
      if (diff > 0) {
        if (diff < 86400000) {
          function checkExpiry() {
            const diff = time - Date.now();
            if (diff > 0) {
              const _setTimeout = setTimeout;
              const timeout = setTimeout(checkExpiry, diff);
            } else {
              closure_0();
            }
          }
          let _setTimeout = setTimeout;
          let timeout = setTimeout(checkExpiry, diff);
          return () => clearTimeout(closure_1);
        }
      }
      return () => {

      };
    }
  }, items3), memo, memo).expired) {
    tmp6 = stateFromStores;
  }
  return tmp6;
}
