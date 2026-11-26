// Module ID: 9399
// Function ID: 9400
// Name: usePromotionMarketingSurface
// Dependencies: [19, 9139, 9162, 9400, 504, 9402, 2]
// Exports: usePromotionMarketingComponentData, usePromotionMarketingSurface

// Module 9399 (usePromotionMarketingSurface)
import passesTrialOfferGateDefault from "passesTrialOfferGate" /* 9402 */;
import react from "react" /* 19 */;
import UserOfferStore from "UserOfferStore" /* 9139 */;
import PromotionsStore from "PromotionsStore" /* 9162 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f95827 = () => {
  const obj = PREMIUM_TAB(dependencyMap[3]);
  const result = obj.maybeFetchActivePromotions();
};
let c6 = 86400000;
let result = size.fileFinishedImporting("modules/premium/hooks/usePromotionMarketingSurface.tsx");

export const SET_COUNTDOWN_TIMER_THRESHOLD = 86400000;
export function usePromotionMarketingSurface(PREMIUM_TAB) {
  _require = PREMIUM_TAB;
  const f95832 = () => PromotionsStore.getMarketingComponentBySurface(f95832);
  let obj = react;
  const effect = react.useEffect(f95827, []);
  const items = [PromotionsStore, UserOfferStore];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const tmp = f95832();
    if (null == tmp) {
      return null;
    } else {
      const marketingPromotionForEligibility = PromotionsStore.getMarketingPromotionForEligibility(tmp.promotionId);
      let tmp7 = null;
      if (passesTrialOfferGateDefault(marketingPromotionForEligibility, UserOfferStore)) {
        tmp7 = tmp;
      }
      return tmp7;
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
        if (diff < closure_2_6) {
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
  _require = arg0;
  const effect = react.useEffect(f95827, []);
  const items = [PromotionsStore, UserOfferStore];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const tmp = f95832();
    if (null == tmp) {
      return null;
    } else {
      const marketingPromotionForEligibility = PromotionsStore.getMarketingPromotionForEligibility(tmp.promotionId);
      let tmp7 = null;
      if (passesTrialOfferGateDefault(marketingPromotionForEligibility, UserOfferStore)) {
        tmp7 = tmp;
      }
      return tmp7;
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
  if (!react.useSyncExternalStore(react.useCallback((arg0) => {
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
        if (diff < closure_2_6) {
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
